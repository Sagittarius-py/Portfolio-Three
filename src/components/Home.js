import React, { Component } from "react";
import profile from "../images/profile.png";

class Home extends Component {
  render() {
    return (
      <div className="home content">
        <div className="title homeTitle">
          <h1 id="titleLabel">Home</h1>
        </div>
        {/* Content, pics and the rest... */}
        <h2 className="subtitle">Hello there!</h2>
        <div className="opis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at ad
          sapiente perferendis aspernatur natus excepturi impedit perspiciatis
          sit, nobis earum porro molestiae velit, ipsa repellendus sequi
          corporis saepe amet.
        </div>
        <img src={profile} alt="profile pic"></img>
      </div>
    );
  }
}

export default Home;
