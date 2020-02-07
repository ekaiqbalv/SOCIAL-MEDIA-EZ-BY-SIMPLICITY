import React, { Component } from "react";
import Button from "./Button";
import "./CardAuth.scss";

class CardAuth extends Component {
  render() {
    return (
      <div className="card-auth">
        <div className="title">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <div className="action">
          <Button type="primary" text={this.props.title} />
        </div>
      </div>
    );
  }
}

export default CardAuth;
