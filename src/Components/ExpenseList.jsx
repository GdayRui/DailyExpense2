import React from "react";
//import '../Sass/components/_ExpenseList.scss';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // If 'data' from MainPage changes, this method is called, ExpenseList component gets updated.
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
      <div className="grid-item expense-list">
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
