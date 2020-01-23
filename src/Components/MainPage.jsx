import React from "react";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import ExpenseForm from "./ExpenseForm";
import "../Sass/main.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: [
        { Description: "Egg", Amount: 3.5, Category: "Grocery" },
        { Description: "Milk", Amount: 3.5, Category: "Grocery" }
      ]
    };
  }

  handleFilterResult = filterResult => {
    console.log("handleFilterResult");
    // using filterd result to update expense list
    this.setState({ expenseList: filterResult });
  };

  //
  componentDidMount() {
    fetch("https://www.w3schools.com/")
      .then(resp => resp.json())
      .then(data => this.setState({ expenseList: data }));
  }

  render() {
    return (
      <div className="main-page">
        <h2>Daily Expense</h2>
        <ExpenseForm />
        <Filter onApplyFilter={this.handleFilterResult} />
        <ExpenseList data={this.state.expenseList} />
      </div>
    );
  }
}

export default MainPage;
