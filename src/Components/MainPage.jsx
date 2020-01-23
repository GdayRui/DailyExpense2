import React from "react";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import ExpenseForm from "./ExpenseForm";
import QuickSearch from "./QuickSearch";
import "../Sass/main.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: []
    };
  }

  handleFilterResult = filterResult => {
    // using filterd result to update expense list
    this.setState({ expenseList: filterResult });
  };

  handleAddNewRecord = newRecord => {
    debugger;
    // Call API to post new record to server and update to table
    fetch("http://localhost:50204/api/Expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecord)
    })
      .then(resp => resp.json())
      .then(addedRecord => {
        let list = this.state.expenseList;
        list.push(addedRecord);

        this.setState({ expenseList: list });
      });
  };

  //
  componentDidMount() {
    debugger;
    fetch("http://localhost:50204/api/Expense")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ expenseList: data })
        debugger;
    });
  }

  render() {
    return (
      <div className="main-page">
        <div>
          <QuickSearch />   
          <Filter onApplyFilter={this.handleFilterResult} />
        </div>

        <div>
          <ExpenseForm onAddNewRecord={this.handleAddNewRecord} />
          <ExpenseList data={this.state.expenseList} />
        </div>
      </div>
    );
  }
}

export default MainPage;
