import React from "react";
import "../Sass/components/_quick-search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class QuickSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // If 'data' from MainPage changes, this method is called.
  static getDerivedStateFromProps(props, state) {
    return { data: props.data };
  }

  // Quick search
  onQuickSearch = e => {
    debugger;
    var userInput = e.target.value.toUpperCase();
    const filterFn = item =>
      item.description.toUpperCase().indexOf(userInput) >= 0 ||
      item.amount.toString().indexOf(userInput) >= 0 ||
      item.categoryName.toUpperCase().indexOf(userInput) >= 0;

    let quickSearchResult = this.state.data.filter(filterFn);

    this.props.onQuickSearch(quickSearchResult);
    console.log("search done");
  };

  render() {
    return (
      <div className="quick-search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" onChange={e => this.onQuickSearch(e)} />
      </div>
    );
  }
}

export default QuickSearch;
