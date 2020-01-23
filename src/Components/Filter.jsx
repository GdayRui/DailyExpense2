import React from "react";
//import './App.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterObj: {
        startDate: null,
        endDate: null,
        catigoryIDs: [],
        minAmount: 0,
        maxAmount: 99999
      }
    };
  }

  filterList = () => {
    // Call API to get filtered result(data) and update to table
    fetch("http://localhost:50204/api/Expense/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.filterObj)
    })
      .then(resp => resp.json())
      .then(filterResult => {
        this.props.onApplyFilter(filterResult);
      });
  };

  render() {
    return (
      <div class="grid-item filter">
        <h2>Filter Name</h2>
        <p>fdasfdsfdsfdas</p>
        <input
          type="button"
          value="Apply Filter"
          onClick={this.filterList}
        ></input>
      </div>
    );
  }
}

export default Filter;
