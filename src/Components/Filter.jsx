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
      }
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
    this.setState({
      filterObj: {
        startDate: "",
        endDate: "",
        catigoryIDs: [],
        minAmount: 0,
        maxAmount: 99999
      }
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

  handleSelectCategory = e => {
    const categoryName = e.target.innerText;
    const categories =this.props.categories;

    let filterObj = this.state.filterObj;

    for (let i=0; i<categories.length; i++) {
      if (categoryName === categories[i].categoryName) {
        filterObj.categoryIDs.push(categories[i].id);
        this.setState({
          filterObj: filterObj
        });
        break;
      }
    }
    
  };

  render() {
    let categories = this.props.categories.map(item => {
      return <div key={item.id} onClick={this.handleSelectCategory}>{item.categoryName}</div>;
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
          {/* <div className="Groceries" onClick={this.handleSelectCategory}>Groceries</div>
          <div className="Education">Education</div>
          <div className="Insurance">Insurance</div>
          <div className="Petrol">Petrol</div>
          <div className="Others">Others</div> */}
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
