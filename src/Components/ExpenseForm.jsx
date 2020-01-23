import React from "react";
import "../Sass/components/_expense-form.scss";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecord: {
        Id: 0,
        Date: "",
        Description: "",
        Amount: "",
        Category: "",
        Comment: "",
        isSelected: false
      },
      category: ["Grocery", "Petrol", "Education", "Insurance", "Others"],
      isError: false
    };
  }

  render() {
    return (
      <div className="expense-form">
        <form>
          <div className="form-group">
            <input
              id="date"
              className="form-control"
              type="date"
              value={this.state.newRecord.Date} // option 1: remove this line, otherwise the date will always be  ''
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <select
              id="category"
              className="form-control"
              value={this.state.newRecord.Category} // option 1: remove this line
              onChange={this.handleInputChange}
            >
              <option value="Grocery">Grocery</option>
              <option>Petrol</option>
              <option>Education</option>
              <option>Insurance</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group">
            <input
              id="item-name"
              className="form-control"
              type="text"
              placeholder="Item Name"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              id="amount"
              className="form-control"
              type="number"
              placeholder="Amount"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              id="comments"
              className="form-control"
              type="text"
              placeholder="Comments"
              onChange={this.handleInputChange}
            />
          </div>
          {/* Alert when submit without input */}
          {/* {alertDiv} */}
          <div>
            <input
              className="btn-add-expense"
              type="button"
              value="Submit"
              onClick={this.onSubmitForm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
