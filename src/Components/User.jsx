import React from "react";
import "../Sass/components/_user.scss";
import Avatar from "../Images/Avatar-01.svg";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Rui"
    };
  }

  render() {
    return (
      <div className="user">
        {/* <div className="user-avatar"></div> */}
        <img src={Avatar} alt="user-avatar" />
        <h2>Hello, Rui</h2>
      </div>
    );
  }
}

export default User;
