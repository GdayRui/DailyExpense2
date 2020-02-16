import React from "react";
import expenseService from "../Services/expenseService";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterObj: {
        startDate: "",
        endDate: "",
        categoryIDs: [],
        minAmount: 0,
        maxAmount: 99999
      },
      categories: []
    };
  }

  handleApplyFilter = () => {
    // to inform the main page start to spin
    this.props.onFilterBegin();

    expenseService
      .filterExpense(this.state.filterObj)
      .then(resp => resp.json())
      .then(filterResult => {
        this.props.onFilterResult(filterResult);
      });
  };

  handleResetFilter = () => {
    // reset category flag
    const resetIsCategorySelected = categories => {
      return categories.map(item => {
        item.isCategorySelected = false;
      });
    };
    // reset date, amount, category
    this.setState({
      filterObj: {
        startDate: "",
        endDate: "",
        categoryIDs: [],
        minAmount: 0,
        maxAmount: 99999
      },
      categories: resetIsCategorySelected(this.state.categories)
    });

    setTimeout(() => {
      this.handleApplyFilter();
    }, 0);
  };

  handleInputChange = e => {
    let filterObj = this.state.filterObj;
    switch (e.target.id) {
      case "start-date":
        filterObj.startDate = e.target.value;
        break;
      case "end-date":
        filterObj.endDate = e.target.value;
        break;
      case "min-amount":
        filterObj.minAmount = e.target.value;
        break;
      case "max-amount":
        filterObj.maxAmount = e.target.value;
        break;
      default:
        break;
    }
  };

  // when click the category div
  handleClickCategory = e => {
    const categoryName = e.target.innerText;
    const categories = this.state.categories;
    const filterObj = this.state.filterObj;

    // push the selected categories' ids to 'categoryIDs'
    for (let i = 0; i < categories.length; i++) {
      if (categoryName === categories[i].categoryName) {
        filterObj.categoryIDs.push(categories[i].id);

        categories[i].isCategorySelected = !categories[i].isCategorySelected;
        this.setState({
          filterObj: filterObj,
          categories: categories
        });
        break;
      }
    }
  };

  static getDerivedStateFromProps(props, state) {
    return { categories: props.categories };
  }

  render() {
    // filter categories
    let categories = this.state.categories.map(item => {
      if (item.isCategorySelected) {
        return (
          <div
            className="category-selected"
            key={item.id}
            onClick={this.handleClickCategory}
          >
            {item.categoryName}
          </div>
        );
      }
      return (
        <div className="" key={item.id} onClick={this.handleClickCategory}>
          {item.categoryName}
        </div>
      );
    });

    return (
      <form className="filter">
        {/* filter by date */}
        <div className="filter-date-range">
          {/* <label htmlFor="start-date">Filter By Date</label> */}
          <label htmlFor="start-date">From</label>
          <input
            id="start-date"
            className="form-control"
            type="date"
            onChange={this.handleInputChange}
          />
          <label htmlFor="start-date">To</label>
          <input
            id="end-date"
            className="form-control"
            type="date"
            onChange={this.handleInputChange}
          />
        </div>

        {/* filter by category */}
        <div className="filter-categories">
          {/* <label>Filter By Categories</label> */}
          {categories}
        </div>

        {/* filter by amount */}
        <div className="filter-amount-range">
          {/* <label htmlFor="min-amount">Filter By Amount</label> */}
          <input
            type="text"
            placeholder="$ min"
            id="min-amount"
            onChange={this.handleInputChange}
          />
          <span>To</span>
          <input
            type="text"
            placeholder="$ max"
            id="max-amount"
            onChange={this.handleInputChange}
          />
        </div>

        {/* filter btns */}
        <div className="filter-btn">
          <input
            type="reset"
            value="Reset Filter"
            className="btn-reset-filter"
            onClick={this.handleResetFilter}
          />
          <input
            type="button"
            value="Apply Filter"
            className="btn-apply-filter"
            onClick={this.handleApplyFilter}
          />
        </div>
      </form>
    );
  }
}

export default Filter;
