import React from "react";
import "../Sass/components/_quick-search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class QuickSearch extends React.Component {
  render() {
    return (
      <div className="quick-search">
        <input type="text"/>
        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
      </div>
    );
  }
}

export default QuickSearch;
