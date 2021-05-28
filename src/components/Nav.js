import React, { Component } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/Nav.scss";

const buttonStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
};

// {this.state.homeActive ? "large" : "small"}

class Nav extends Component {
  state = {
    homeActive: true,
    aboutActive: false,
    projectsActive: false,
    contactActive: false,
  };
  changeButton = () => {};
  render() {
    return (
      <nav className="navbar">
        <ButtonGroup orientation="vertical">
          <Button
            variant="text"
            color="secondary"
            size="large"
            style={buttonStyle}
            onClick={this.changeButton}
            direction="up"
          >
            <ExpandLessIcon fontSize="large" />
          </Button>
          <Button
            variant="text"
            color="secondary"
            style={buttonStyle}
            size="large"
          >
            <FiberManualRecordIcon
              fontSize={this.state.homeActive ? "large" : "small"}
            />
            <label>Home</label>
          </Button>
          <Button
            variant="text"
            color="secondary"
            style={buttonStyle}
            size="large"
          >
            <FiberManualRecordIcon
              fontSize={this.state.aboutActive ? "large" : "small"}
            />
          </Button>
          <Button
            variant="text"
            color="secondary"
            style={buttonStyle}
            size="large"
          >
            <FiberManualRecordIcon
              fontSize={this.state.projectsActive ? "large" : "small"}
            />
          </Button>
          <Button
            variant="text"
            color="secondary"
            style={buttonStyle}
            size="large"
          >
            <FiberManualRecordIcon
              fontSize={this.state.contactActive ? "large" : "small"}
            />
          </Button>
          <Button
            variant="text"
            color="secondary"
            style={buttonStyle}
            size="large"
            onClick={this.changeButton}
            direction="down"
          >
            <ExpandMoreIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </nav>
    );
  }
}

export default Nav;
