import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { ButtonGroup, Button } from "@material-ui/core";

const buttonStyle = {
  width: "15vw",
  height: "15vw",
  zIndex: "100",
  borderRadius: "50%",
  border: "none",
  background: "none",
  margin: "0 30px 0 30px",
};

const itemStyle = { width: "10vw", height: "10vw" };

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Contact content">
          <div className="title contactTitle">
            <h1 id="titleLabel">Contact</h1>
          </div>
          <div className="buttonContainer">
            <ButtonGroup
              orientation="horizontal"
              className="ButtonGroupContainer"
            >
              <Button variant="contained" className="contactButton">
                <GitHubIcon style={itemStyle} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
