import React, { Component } from "react";
import CenterView from "../components/CenterView";
import CardAuth from "../components/CardAuth";
import InputIcon from "../components/InputIcon";

class Register extends Component {
  render() {
    return (
      <div>
        <CenterView>
          <CardAuth title="Daftar">
            <div>
              <InputIcon iconType="user" placeholder="Username" />
              <InputIcon iconType="mail" placeholder="E-mail" />
              <InputIcon iconType="lock" placeholder="Password" />
            </div>
          </CardAuth>
        </CenterView>
      </div>
    );
  }
}

export default Register;
