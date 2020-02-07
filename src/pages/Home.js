import React, { Component } from "react";
import NavHeader from "../components/NavHeader";
import Container from "../components/Container"
import CreatePost from "../components/CreatePost"
import ListPost from "../components/ListPost"

class Home extends Component {
  render() {
    return (
      <div>
        <NavHeader isLogin="false" />
        <Container>
          <CreatePost />
          <ListPost />
        </Container>
      </div>
    );
  }
}

export default Home;
