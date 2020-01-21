import React from "react";
//import './App.css';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // If ExpenseList component gets updated, this method is called.
  static getDerivedStateFromProps(props, state) {
    return { data: props.data };
  }

  render() {
    let listJsx = this.state.data.map(item => {
      return (
        <tr>
          <td>{item.Description}</td>
          <td>{item.Amount}</td>
          <td>{item.Category}</td>
        </tr>
      );
    });
    return (
      <div>
        <h2>Expense List Page</h2>
        <table>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
          {listJsx}
        </table>
      </div>
    );
  }
}

export default ExpenseList;
