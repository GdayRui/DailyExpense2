import React from "react";
import "../Sass/components/_login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numSelectedRecords: 0
    };
  }

  render() {
    return (
      <div className="delete-records">
        <input
          onClick={this.props.handleDelete}
          // ES6 string
          value={`Delete ${this.state.numSelectedRecords} Records`}
          disabled={this.state.numSelectedRecords === 0}
        />
      </div>
    );
  }
}

export default Login;
