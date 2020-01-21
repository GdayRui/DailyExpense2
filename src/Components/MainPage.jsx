import React from "react";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import ExpenseForm from "./ExpenseForm";

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

  render() {
    return (
      <div className="main-page">
        <Filter onApplyFilter={this.handleFilterResult} />
        <ExpenseList data={this.state.expenseList} />
        <ExpenseForm />
      </div>
    );
  }
}

export default MainPage;
