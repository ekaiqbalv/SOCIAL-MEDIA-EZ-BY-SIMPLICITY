import React, { Component } from "react";
import "./InputIcon.scss";

class InputIcon extends Component {
  render() {
    return (
      <div className="input-icon">
        <label>
          <i className={`${this.props.iconType} icon`}></i>
        </label>
        <input placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputIcon;
