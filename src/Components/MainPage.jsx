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
      expenseList: [
        { id: 0, Description: "Egg", Amount: 3.5, Category: "Grocery" },
        { id: 1, Description: "Milk", Amount: 3.5, Category: "Grocery" }
      ]
    };
  }

  handleFilterResult = filterResult => {
    // using filterd result to update expense list
    this.setState({ expenseList: filterResult });
  };

  //
  componentDidMount() {
    fetch("http://localhost:50204/api/Expense")
      .then(resp => resp.json())
      .then(data => this.setState({ expenseList: data }));
  }

  render() {
    return (
      <div className="main-page">
        <h2>Daily Expense</h2>

        <div>
          <QuickSearch />
          <Filter onApplyFilter={this.handleFilterResult} />
        </div>
        
        <div>
          <ExpenseForm />
          <ExpenseList data={this.state.expenseList} />
        </div>
      </div>
    );
  }
}

export default MainPage;
