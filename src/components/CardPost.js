import React, { Component } from "react";
import "./CardPost.scss";

class CardPost extends Component {
  render() {
    return (
      <div className="card-post">
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default CardPost;
