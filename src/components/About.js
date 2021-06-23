import React from "react";
import CustomizedTimeline from "./about/Timeline";
import Chart from "./about/Chart";

function About(props) {
  console.log(props.width);
  return (
    <div className="About content">
      <div className="title aboutTitle">
        <h1 id="titleLabel">About Me</h1>
      </div>
      <div className="graph">
        <Chart />
      </div>
      <div className="timeline">
        {props.widht >= 500 ? <CustomizedTimeline /> : null}
      </div>
    </div>
  );
}

export default About;
