import React from "react";
import "../Sass/components/_expense-form.scss";
import expenseService from "../Services/expenseService";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecord: {
        Id: 0,
        DateTime: "",
        Description: "",
        Amount: "",
        CategoryName: "",
        Comments: ""
      },
      category: [],
      isError: false
    };
  }

  onSubmitForm = () => {
    const r = this.state.newRecord;
    if (
      r.Amount === "" ||
      r.Description === ""
      // r.DateTime === "" ||
      // r.CategoryName === ""
    ) {
      this.setState({ isError: true });
    } else {
      r.CategoryName = document.getElementById("category").value;
      this.setState({ newRecord: r });

      // update newRecord to MainPage
      this.props.onAddNewRecord(this.state.newRecord);

      // clear inputs once 'Submit' button is clicked
      document.getElementById("expense-form").reset();
    }
  };

  // get value of new record using onChange fn
  handleInputChange = e => {
    const newRecord = this.state.newRecord;

    if (e.target.id === "date") {
      newRecord.DateTime = e.target.value;
    } else if (e.target.id === "category") {
      newRecord.CategoryName = e.target.value;
    } else if (e.target.id === "item-name") {
      newRecord.Description = e.target.value;
    } else if (e.target.id === "amount") {
      newRecord.Amount = e.target.value;
    } else if (e.target.id === "comments") {
      newRecord.Comments = e.target.value;
    }

    this.setState({ newRecord: newRecord });
  };

  // get categories obj list from sever, includs 'id' & 'categoryName'
  componentDidMount() {
    // fetch("http://localhost:50204/api/Expense/Categories")
    expenseService
      .getCategories()
      .then(resp => resp.json())
      .then(categories => {
        this.setState({
          category: categories
        });
      });
  }

  render() {
    // debugger;
    console.log("render");
    // Form Category options
    const categoryNames = this.state.category.map(ele => {
      return <option>{ele.categoryName}</option>;
    });

    // Form
    return (
      <div className="expense-form">
        <form id="expense-form">
          <div className="form-group">
            <input
              id="date"
              className="form-control"
              type="date"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <select
              id="category"
              className="form-control"
              onChange={this.handleInputChange}
            >
              {categoryNames}
              {/* hard code of categories*/}
              {/* <option value="Grocery">Grocery</option>
              <option>Petrol</option>
              <option>Education</option>
              <option>Insurance</option>
              <option>Others</option> */}
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
