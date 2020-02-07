import React from "react";
import '../Sass/components/_login.scss';
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "sample_user",
      password: "1234567",
      error: "",
      redirect: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" , redirect: "/expense"});
  }

  handleUserChange(evt) {

    switch (evt.target.id) {
      case "username":
        this.setState({
          username: evt.target.value
        });
        break;

      case "password":
        this.setState({
          password: evt.target.value
        });
        break;

      default:
        break;
    }

  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    else {
      return (
        <div className="login">
          <div id="form-container">
            <form id="login-form" onSubmit={this.handleSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              )}
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  id="username"
                  type="text"
                  data-test="username"
                  value={this.state.username}
                  onChange={this.handleUserChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  data-test="password"
                  value={this.state.password}
                  onChange={this.handlePassChange}
                />
              </div>

              <div>
                <input type="submit" className="btn-login" value="Login" data-test="submit" />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
