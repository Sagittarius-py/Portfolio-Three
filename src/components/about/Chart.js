import React, { Component } from "react";

class Chart extends Component {
  render() {
    return (
      <div className="inGraph">
        <h2>My Skills</h2>
        <p>HTML</p>
        <div className="kontener">
          <div className="skills html">
            <p>98% </p>
          </div>
        </div>

        <p>CSS</p>
        <div className="kontener">
          <div className="skills css">
            <p>87% </p>
          </div>
        </div>

        <p>JavaScript</p>
        <div className="kontener">
          <div className="skills js">
            <p>65% </p>
          </div>
        </div>

        <p>React</p>
        <div className="kontener">
          <div className="skills react">
            <p>48% </p>
          </div>
        </div>
        <p>Sass</p>
        <div className="kontener">
          <div className="skills sass">
            <p>34% </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
