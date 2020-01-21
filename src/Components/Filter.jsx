import React from "react";
//import './App.css';

class Filter extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    catigories: [],
    minAmount: 0,
    maxAmount: 99999
  };

  filterList = () => {
    //console.log('filter List')
    let filterResult = [];
    // call API and update filtered result
    
    this.props.onApplyFilter(filterResult);
  };

  render() {
    return (
      <div>
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
