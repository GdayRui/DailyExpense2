import React from "react";
import "../Sass/components/_delete-records.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSelectedRecords: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { numSelectedRecords: props.numSelectedRecords };
  }

  render() {
    return (
      <div className="delete-records">
        <input
          type="button"
          onClick={this.props.onDelete}
          // ES6 string
          value={`Delete ${this.state.numSelectedRecords} Records`}
          // disabled={this.state.numSelectedRecords === 0}
        />
      </div>
    );
  }
}
 
export default Login;
