import React from "react";
//import './App.css';
import { Link } from "react-router-dom";

class Board extends React.Component {
  render() {
    return (
      <div>
        <Link to="/expenselist">
          <div>
            <h2>Board Name</h2>
            <p>fdasfdsfdsfdas</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Board;
