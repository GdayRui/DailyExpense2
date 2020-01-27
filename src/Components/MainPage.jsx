import React from "react";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import ExpenseForm from "./ExpenseForm";
import QuickSearch from "./QuickSearch";
import DeleteRecords from "./DeleteRecords";
import "../Sass/main.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: [],
      quickSearchResult: []
    };
  }

  handleDelete = () => {
    // delete all records that marked as "selected"

    // call API



    // refresh component
    this.setState({expenseList: this.state.expenseList});
  };

  handleQuickSearch = quickSearchResult => {
    this.setState({ quickSearchResult: quickSearchResult});
  }

  // add isSelected flag to each element of data list
  addFlagToList = (dataList) => {
    return dataList.map(item=>{
      item.isSelected = false;
      return item;
    })
  }

  handleFilterResult = filterResult => {
    // add flags to filter result
    let modifiedData =  this.addFlagToList(filterResult);

    // using filterd result to update expense list
    this.setState({ expenseList: modifiedData });
    this.setState({ quickSearchResult: modifiedData});
    //this.setState({ expenseList: filterResult });
    //this.setState({ quickSearchResult: filterResult});
  };

  handleAddNewRecord = newRecord => {
    // debugger;
    // Call API to post new record to server and update to table
    fetch("http://localhost:50204/api/Expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecord)
    })
      .then(resp => resp.json())
      .then(addedRecord => {
        // add flag to this new record obj
        addedRecord.isSelected = false;
        let list = this.state.expenseList;
        list.push(addedRecord);

        this.setState({ expenseList: list });
        this.setState({ quickSearchResult: list});
      });
  };

  // load data from sever
  componentDidMount() {
    fetch("http://localhost:50204/api/Expense")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        let modifiedData = this.addFlagToList(data);

        // let modifiedData = data.map(item=>{
        //   item.isSelected = false;
        //   return item;
        // })

        this.setState({ expenseList: modifiedData });
        this.setState({ quickSearchResult: modifiedData});
        //this.setState({ expenseList: data });
        //this.setState({ quickSearchResult: data});
    });
  }

  render() {
    return (
      <div className="main-page">
        <div>
          <QuickSearch data={this.state.expenseList} onQuickSearch={this.handleQuickSearch} />   
          <Filter onApplyFilter={this.handleFilterResult} />
        </div>

        <div>
          <ExpenseForm onAddNewRecord={this.handleAddNewRecord} />
          <DeleteRecords onDelete={this.handleDelete} numSelected={0} />
          <ExpenseList data={this.state.quickSearchResult} />
        </div>
      </div>
    );
  }
}

export default MainPage;
