import React, { Component } from "react";
import CenterView from "../components/CenterView";
import CardAuth from "../components/CardAuth";
import InputIcon from "../components/InputIcon";

class Login extends Component {
  render() {
    return (
      <div>
        <CenterView>
          <CardAuth title="Masuk">
            <div>
              <InputIcon iconType="user" placeholder="Username" />
              <InputIcon iconType="lock" placeholder="Password" />
            </div>
          </CardAuth>
        </CenterView>
      </div>
    );
  }
}

export default Login;
