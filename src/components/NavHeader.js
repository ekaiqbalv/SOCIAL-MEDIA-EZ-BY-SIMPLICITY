import React, { Component } from "react";
import Button from "./Button";
import "./NavHeader.scss";

const renderButton = loginStatus => {
  if (loginStatus === "true") {
    return <Button type="primary" text="Keluar" />;
  } else if (loginStatus === "false") {
    return (
      <div className="right-menu">
        <Button
          type="primary"
          text="Masuk"
        />
        <Button type="secondary" text="Daftar" />
      </div>
    );
  }
};

class NavHeader extends Component {
  state = {
    isLogin: this.props.isLogin
  };

  render() {
    return (
      <div className="container-header">
        <div className="header">
          <div className="app-name">Jangkrik</div>
          {renderButton(this.state.isLogin)}
        </div>
      </div>
    );
  }
}

export default NavHeader;
