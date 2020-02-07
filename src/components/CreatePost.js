import React, { Component } from "react";
import CardPost from "./CardPost";
import Button from "./Button";
import "./CreatePost.scss";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <CardPost avatar="https://api.adorable.io/avatars/1212">
          <div className="container-post">
            <textarea
              type="text"
              rows="4"
              maxLength="500"
              placeholder="Apa yang sedang terjadi?"
            ></textarea>
            <div className="container-button">
              <Button type="primary" text="Krik" />
            </div>
          </div>
        </CardPost>
        <div className="divider"></div>
      </div>
    );
  }
}

export default CreatePost;
