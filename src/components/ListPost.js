import React, { Component } from "react";
import CardPost from "./CardPost";
import "./ListPost.scss";

class ListPost extends Component {
  state = { username: "asdasd" };

  render() {
    return (
      <div>
        <CardPost avatar="https://api.adorable.io/avatars/1213">
          <div className="info-user">
            <div className="name">Asdasd</div>
            <div className="username">@{this.state.username}</div>
            <div className="date-post">13 Menit</div>
          </div>
          <div className="text-post">Hallo nama saya james</div>
          <div className="info-post">
            <div className="comment">
              <i className="comment outline icon"></i>
              <span>1</span>
            </div>
            <div className="like">
              <i className="heart outline icon"></i>
              <span>1</span>
            </div>
          </div>
        </CardPost>
        <CardPost avatar="https://api.adorable.io/avatars/1213">
          <div className="info-user">
            <div className="name">Asdasd</div>
            <div className="username">@{this.state.username}</div>
            <div className="date-post">13 Menit</div>
          </div>
          <div className="text-post">Hallo nama saya james</div>
          <div className="info-post">
            <div className="comment">
              <i className="comment outline icon"></i>
              <span>1</span>
            </div>
            <div className="like">
              <i className="heart outline icon"></i>
              <span>1</span>
            </div>
          </div>
        </CardPost>
        <CardPost avatar="https://api.adorable.io/avatars/1213">
          <div className="info-user">
            <div className="name">Asdasd</div>
            <div className="username">@{this.state.username}</div>
            <div className="date-post">13 Menit</div>
          </div>
          <div className="text-post">Hallo nama saya james</div>
          <div className="info-post">
            <div className="comment">
              <i className="comment outline icon"></i>
              <span>1</span>
            </div>
            <div className="like">
              <i className="heart outline icon"></i>
              <span>1</span>
            </div>
          </div>
        </CardPost>
        <CardPost avatar="https://api.adorable.io/avatars/1213">
          <div className="info-user">
            <div className="name">Asdasd</div>
            <div className="username">@{this.state.username}</div>
            <div className="date-post">13 Menit</div>
          </div>
          <div className="text-post">Hallo nama saya james</div>
          <div className="info-post">
            <div className="comment">
              <i className="comment outline icon"></i>
              <span>1</span>
            </div>
            <div className="like">
              <i className="heart outline icon"></i>
              <span>1</span>
            </div>
          </div>
        </CardPost>
        <CardPost avatar="https://api.adorable.io/avatars/1213">
          <div className="info-user">
            <div className="name">Asdasd</div>
            <div className="username">@{this.state.username}</div>
            <div className="date-post">13 Menit</div>
          </div>
          <div className="text-post">Hallo nama saya james</div>
          <div className="info-post">
            <div className="comment">
              <i className="comment outline icon"></i>
              <span>1</span>
            </div>
            <div className="like">
              <i className="heart outline icon"></i>
              <span>1</span>
            </div>
          </div>
        </CardPost>
      </div>
    );
  }
}

export default ListPost;
