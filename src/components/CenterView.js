import React, { Component } from "react";
import "./CenterView.scss";

class CenterView extends Component {
  render() {
    return (
      <div className="center-view">
        {this.props.children}
      </div>
    );
  }
}

export default CenterView;
