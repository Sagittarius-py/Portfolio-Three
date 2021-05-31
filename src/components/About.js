import React, { Component } from "react";
import CustomizedTimeline from "./about/Timeline";

export default class About extends Component {
  render() {
    return (
      <div className="About content">
        <div className="title aboutTitle">
          <h1 id="titleLabel">About Me</h1>
        </div>
        <div className="timeline">
          <CustomizedTimeline />
        </div>
      </div>
    );
  }
}
