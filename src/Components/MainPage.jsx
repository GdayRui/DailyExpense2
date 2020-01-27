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
      expenseList: [],
      quickSearchResult: []
    };
  }

  handleQuickSearch = quickSearchResult => {
    this.setState({ quickSearchResult: quickSearchResult});
  }

  handleFilterResult = filterResult => {
    // using filterd result to update expense list
    this.setState({ expenseList: filterResult });
    this.setState({ quickSearchResult: filterResult});
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
        this.setState({ quickSearchResult: list});
      });
  };

  //
  componentDidMount() {
    fetch("http://localhost:50204/api/Expense")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ expenseList: data });
        this.setState({ quickSearchResult: data});
    });
  }

  render() {
    return (
      <div className="main-page">
        <div>
          <QuickSearch data={this.state.expenseList} onQuickSearch={this.handleQuickSearch} />   
          <Filter onApplyFilter={this.handleFilterResult} />
        </div>

        <div>
          <ExpenseForm onAddNewRecord={this.handleAddNewRecord} />
          <ExpenseList data={this.state.quickSearchResult} />
        </div>
      </div>
    );
  }
}

export default MainPage;
