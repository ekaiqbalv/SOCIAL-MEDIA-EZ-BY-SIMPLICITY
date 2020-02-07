import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    const buttonType = this.props.type

    return (
      <div>
        <button className={`btn ${buttonType}`}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
