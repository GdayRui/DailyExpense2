import React from "react";
//import '../Sass/components/_ExpenseList.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCaretUp } from "@fortawesome/free-solid-svg-icons";

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: true,
      isMainPage: true,
      data: [],
      dataFiltered: [],
      storageKey: "expenseList",
      numSelectedRecords: 0,
      sortingColumn: ""
    };
  }

  // If 'data' from MainPage changes, this method is called, ExpenseList component gets updated.
  static getDerivedStateFromProps(props, state) {
    debugger;
    return { data: props.data };
  }

  render() {
    debugger;
    let listJsx = this.state.data.map(item => {
      return (
        <tr key={item.id} onClick={() => this.handleSelected(item.Id)}>
          <td>{item.dateTime}</td>
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
    return (
      <div className="expense-list">
        <table>
        <thead>
            <tr>
              <th onClick={() => this.handleSort("Date")}>
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
              <th className="Table-th"></th>
            </tr>
          </thead>
          <tbody>{listJsx}</tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseList;
