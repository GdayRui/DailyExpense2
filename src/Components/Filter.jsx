import React from "react";
import expenseService from "../Services/expenseService";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterObj: {
        startDate: "",
        endDate: "",
        catigoryIDs: [],
        minAmount: 0,
        maxAmount: 99999
      }
    };
  }

  handleApplyFilter = () => {
    // Call API to get filtered result(data) and update to table
    // fetch("http://localhost:50204/api/Expense/filter", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(this.state.filterObj)
    // })
    expenseService
      .filterExpense(this.state.filterObj)
      .then(resp => resp.json())
      .then(filterResult => {
        this.props.onApplyFilter(filterResult);
      });
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

  render() {
    return (
      <form className="filter">
        {/* filter by date */}
        <div className="filter-date-range">
          <label htmlFor="start-date">Filter By Date</label>
          <div>
            <input
              id="start-date"
              className="form-control"
              type="date"
              onChange={this.handleInputChange}
            />
            <span>To</span>
            <input
              id="end-date"
              className="form-control"
              type="date"
              onChange={this.handleInputChange}
            />
          </div>
          <hr />
        </div>

        {/* filter by category */}
        <div className="filter-categories">
          <label htmlFor="start-date">Filter By Categories</label>
          <div>
            <input type="button" value="Groceries" />
            <input type="button" value="Education" />
            <input type="button" value="Insurance" />
            <input type="button" value="Petrol" />
            <input type="button" value="Others" />
          </div>
        </div>

        {/* filter by amount */}
        <div className="filter-amount-range">
          <label htmlFor="start-date">Filter By Amount</label>
          <div>
            <input
              type="text"
              id="min-amount"
              onChange={this.handleInputChange}
            />
            <span>To</span>
            <input
              type="text"
              id="max-amount"
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        {/* filter btns */}
        <div className="filter-btn">
          <input
            type="button"
            value="Apply Filter"
            className="btn-apply-filter"
            onClick={this.handleApplyFilter}
          />
          <input
            type="reset"
            value="Reset Filter"
            className="btn-reset-filter"
            onClick={this.handleApplyFilter}
          />
        </div>
      </form>
    );
  }
}

export default Filter;
