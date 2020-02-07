import React, { Component } from "react";
import "./Container.scss";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          {this.props.children}
        </div>        
      </div>
    );
  }
}

export default Container;
