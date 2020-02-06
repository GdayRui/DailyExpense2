import React from "react";
import "../Sass/components/_logo.scss";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="logo">
        <div></div>
        <span dangerouslySetInnerHTML={{ __html: "&copy; Copyright" }} />
      </div>
    );
  }
}

export default Logo;
