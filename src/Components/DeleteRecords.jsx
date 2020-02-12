import React from "react";
import "../Sass/components/_delete-records.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="delete-records">
        <input
          type="button"
          onClick={this.props.onDelete}
          // ES6 string
          value={`Delete ${this.props.numSelectedRecords} Records`}
          disabled={this.props.numSelectedRecords === 0}
        />
      </div>
    );
  }
}

export default Login;
