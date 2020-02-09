import React from "react";
//import '../Sass/components/_ExpenseList.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCaretUp,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: true,
      data: [],
      storageKey: "expenseList",
      numSelectedRecords: 0,
      sortingColumn: ""
    };
  }

  // If 'data' from MainPage changes, this method is called, ExpenseList component gets updated.
  static getDerivedStateFromProps(props, state) {
    // debugger;
    return { data: props.data };
  }

  // Toggle select rows
  handleSelected = id => {
    let numSelectedRecords = this.state.numSelectedRecords;

    for (let i = 0; i < this.state.data.length; i++) {
      if (id === this.state.data[i].id) {
        let tmpData = this.state.data;

        tmpData[i].isSelected = !tmpData[i].isSelected;
        tmpData[i].isSelected ? numSelectedRecords++ : numSelectedRecords--;

        this.setState({
          numSelectedRecords: numSelectedRecords,
          data: tmpData
        });

        this.props.onToggleSelect(numSelectedRecords);
        return;
      }
    }
  };

  // Sort the data each column
  handleSort = type => {
    // debugger;
    const compareItem = (a, b) => {
      const itemA = a.description.toUpperCase();
      const itemB = b.description.toUpperCase();
      // ** cannot compare 2 strings. this compare fn only return 0, 1, -1.
      // return itemA>itemB?1:-1;
      let comparison = 0;
      if (itemA > itemB) {
        this.state.ascending ? (comparison = 1) : (comparison = -1);
      } else if (itemA < itemB) {
        this.state.ascending ? (comparison = -1) : (comparison = 1);
      }
      return comparison;
    };

    const compareAmount = (a, b) => {
      return this.state.ascending ? a.amount - b.amount : b.amount - a.amount;
    };

    const compareComment = (a, b) => {
      const commentA = a.comments.toUpperCase();
      const commentB = b.comments.toUpperCase();
      let comparison = 0;
      if (commentA > commentB) {
        this.state.ascending ? (comparison = 1) : (comparison = -1);
      } else if (commentA < commentB) {
        this.state.ascending ? (comparison = -1) : (comparison = 1);
      }
      return comparison;
    };

    const compareCategory = (a, b) => {
      const categoryA = a.categoryName.toUpperCase();
      const categoryB = b.categoryName.toUpperCase();
      let comparison = 0;
      if (categoryA > categoryB) {
        this.state.ascending ? (comparison = 1) : (comparison = -1);
      } else if (categoryA < categoryB) {
        this.state.ascending ? (comparison = -1) : (comparison = 1);
      }
      return comparison;
    };

    const compareDate = (a, b) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);
      let comparison = 0;
      if (dateA > dateB) {
        this.state.ascending ? (comparison = 1) : (comparison = -1);
      } else if (dateA < dateB) {
        this.state.ascending ? (comparison = -1) : (comparison = 1);
      }
      return comparison;
    };

    switch (type) {
      case "Amount":
        this.state.data.sort(compareAmount);
        break;
      case "Item":
        this.state.data.sort(compareItem);
        break;
      case "Comment":
        this.state.data.sort(compareComment);
        break;
      case "Category":
        this.state.data.sort(compareCategory);
        break;
      case "Date":
        this.state.data.sort(compareDate);
        break;
      default:
        break;
    }

    this.setState({
      sortingColumn: type,
      ascending: !this.state.ascending
    });
  };

  render() {
    let listJsx = this.state.data.map(item => {
      let dt = new Date(item.dateTime);

      return (
        <tr key={item.id} onClick={() => this.handleSelected(item.id)}>
          <td>{`${dt.getFullYear()}-${
            dt.getMonth() > 9 ? "" : "0"
          }${dt.getMonth() + 1}-${
            dt.getDate() > 10 ? "" : "0"
          }${dt.getDate()}`}</td>
          <td>{item.description}</td>
          <td>{item.amount}</td>
          <td>{item.categoryName}</td>
          <td>{item.comments}</td>
          {item.isSelected ? (
            <td>
              <FontAwesomeIcon icon={faCheckCircle} />
            </td>
          ) : (
            <td></td>
          )}
        </tr>
      );
    });

    let loadingRow = (
      <tr>
        <td colSpan="6" className="loading">
          <FontAwesomeIcon
            className="faSpinner fa-spin fa-2x"
            icon={faSpinner}
          />
        </td>
      </tr>
    );
    return (
      <div className="expense-table">
        <table>
          <thead>
            <tr>
              <th className="left-th" onClick={() => this.handleSort("Date")}>
                Date{" "}
                {this.state.sortingColumn === "Date" &&
                  (this.state.ascending ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon className="faCaretDown" icon={faCaretUp} />
                  ))}
              </th>
              <th onClick={() => this.handleSort("Item")}>
                Item{" "}
                {this.state.sortingColumn === "Item" &&
                  (this.state.ascending ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon className="faCaretDown" icon={faCaretUp} />
                  ))}
              </th>
              <th onClick={() => this.handleSort("Amount")}>
                Amount{" "}
                {this.state.sortingColumn === "Amount" &&
                  (this.state.ascending ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon className="faCaretDown" icon={faCaretUp} />
                  ))}
              </th>
              <th onClick={() => this.handleSort("Category")}>
                Category{" "}
                {this.state.sortingColumn === "Category" &&
                  (this.state.ascending ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon className="faCaretDown" icon={faCaretUp} />
                  ))}
              </th>
              <th onClick={() => this.handleSort("Comment")}>
                Comment{" "}
                {this.state.sortingColumn === "Comment" &&
                  (this.state.ascending ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon className="faCaretDown" icon={faCaretUp} />
                  ))}
              </th>
              <th className="Table-th right-th"></th>
            </tr>
          </thead>
          <tbody>
            {!this.props.isLoading ? listJsx : loadingRow}
            <tr>
              <td colSpan="6" className="table-footer"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseList;
