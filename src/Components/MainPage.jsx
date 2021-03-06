import React from "react";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import ExpenseForm from "./ExpenseForm";
import QuickSearch from "./QuickSearch";
import DeleteRecords from "./DeleteRecords";
import expenseService from "../Services/expenseService";
import User from "./User";
import Logo from "./Logo";
import "../Sass/main.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: [],
      quickSearchResult: [],
      numSelectedRecords: 0,
      isLoading: true,
      categories: []
    };
  }

  // delete all records that marked as "selected"
  handleDelete = () => {
    // Find element ids
    const idList = this.state.expenseList
      .filter(item => item.isSelected)
      .map(item => item.id);

    expenseService
      .deleteExpense(idList)
      .then(resp => resp.json())
      .then(data => {
        expenseService
          .getAllExpense()
          .then(resp => resp.json())
          .then(data => {
            const modifiedData = this.addFlagToList(data);
            this.setState({
              expenseList: modifiedData,
              quickSearchResult: modifiedData,
              numSelectedRecords: 0
            });
          });
      });
  };

  handleQuickSearch = quickSearchResult => {
    this.setState({ quickSearchResult: quickSearchResult });
  };

  // add isSelected flag to each element of data list
  addFlagToList = dataList => {
    return dataList.map(item => {
      item.isSelected = false;
      return item;
    });
  };

  // add isSelected flag to each element of data list
  // addFlagToCategories = categoryList => {
  //   return categoryList.map(item => {
  //     item.isCategorySelected = false;
  //     return item;
  //   });
  // };

  handleFilterBegin = categories => {
    this.setState({
      isLoading: true
      // categories: this.addFlagToCategories(categories)
    });
  };

  handleFilterResult = filterResult => {
    // add flags to filter result
    const modifiedData = this.addFlagToList(filterResult);

    // using filterd result to update expense list
    this.setState({
      expenseList: modifiedData,
      quickSearchResult: modifiedData,
      isLoading: false
    });
  };

  handleAddNewRecord = newRecord => {
    expenseService
      .addNew(newRecord)
      .then(resp => resp.json())
      .then(addedRecord => {
        // add flag to this new record obj
        addedRecord.isSelected = false;
        const list = this.state.expenseList;
        list.push(addedRecord);

        this.setState({ expenseList: list, quickSearchResult: list });
      });
  };

  handleToggleSelect = isSelected => {
    this.setState({
      numSelectedRecords: isSelected
        ? this.state.numSelectedRecords + 1
        : this.state.numSelectedRecords - 1
    });
  };

  // load data from sever after render
  componentDidMount() {
    expenseService
      .getAllExpense()
      .then(resp => resp.json())
      .then(data => {
        const modifiedData = this.addFlagToList(data);

        this.setState({
          expenseList: modifiedData,
          quickSearchResult: modifiedData,
          isLoading: false
        });
      });

    expenseService
      .getCategories()
      .then(resp => resp.json())
      .then(categories => {
        this.setState({
          categories: categories
        });
      });
  }

  render() {
    return (
      <div className="main-page">
        <div className="nav">
          <User />
          <Filter
            onFilterResult={this.handleFilterResult}
            onFilterBegin={this.handleFilterBegin}
            categories={this.state.categories}
          />
          {/* <div className="summary-btn"></div> */}
          {/* <Logo /> */}
        </div>

        <div className="main">
          <ExpenseForm
            onAddNewRecord={this.handleAddNewRecord}
            categories={this.state.categories}
          />
          <div className="expense-list">
            <QuickSearch
              data={this.state.expenseList}
              onQuickSearch={this.handleQuickSearch}
            />
            <DeleteRecords
              onDelete={this.handleDelete}
              numSelectedRecords={this.state.numSelectedRecords}
            />
            <ExpenseList
              data={this.state.quickSearchResult}
              onToggleSelect={this.handleToggleSelect}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
