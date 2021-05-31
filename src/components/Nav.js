import React, { Component } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const buttonStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  transition: "0.5s",
};

class Nav extends Component {
  state = {
    homeActive: true,
    aboutActive: false,
    projectsActive: false,
    contactActive: false,
    width: null,
    height: null,
  };

  counterer = 1;

  componentWillMount() {
    this.getWindowDimensions();
  }

  getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    this.setState({
      width,
      height,
    });
  };

  changeButtonUp = () => {
    if (this.counterer > 1) {
      this.counterer--;
    } else {
      return;
    }
    this.display();
  };

  changeButtonDown = () => {
    if (this.counterer < 4) {
      this.counterer++;
    } else {
      return;
    }
    this.display();
  };

  display = () => {
    if (this.counterer === 1) {
      this.setState({
        homeActive: true,
        aboutActive: false,
        projectsActive: false,
        contactActive: false,
      });
    } else if (this.counterer === 2) {
      this.setState({
        homeActive: false,
        aboutActive: true,
        projectsActive: false,
        contactActive: false,
      });
    } else if (this.counterer === 3) {
      this.setState({
        homeActive: false,
        aboutActive: false,
        projectsActive: true,
        contactActive: false,
      });
    } else if (this.counterer === 4) {
      this.setState({
        homeActive: false,
        aboutActive: false,
        projectsActive: false,
        contactActive: true,
      });
    }
    this.sendData();
  };

  sendData = () => {
    this.props.parentCallback(this.counterer);
  };

  render() {
    window.addEventListener("resize", this.getWindowDimensions);

    console.log(this.state.width);
    return (
      <nav className="navbar">
        {this.state.width > 1023 ? (
          <ButtonGroup orientation="vertical">
            <Button
              variant="text"
              color="secondary"
              size="large"
              style={buttonStyle}
              onClick={this.changeButtonUp}
              direction="up"
            >
              <ExpandLessIcon fontSize="large" />
            </Button>

            {/*Przycisk do góry ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
            >
              <FiberManualRecordIcon
                fontSize={this.state.homeActive ? "large" : "small"}
              />
              <label>{this.state.homeActive ? "Home" : null}</label>
            </Button>

            {/*Przycisk do home ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
            >
              <FiberManualRecordIcon
                fontSize={this.state.aboutActive ? "large" : "small"}
              />
              {this.state.aboutActive ? "About" : null}
            </Button>

            {/*Przycisk do about ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
            >
              <FiberManualRecordIcon
                fontSize={this.state.projectsActive ? "large" : "small"}
              />
              {this.state.projectsActive ? "Projects" : null}
            </Button>

            {/*Przycisk do projects ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
            >
              <FiberManualRecordIcon
                fontSize={this.state.contactActive ? "large" : "small"}
              />
              {this.state.contactActive ? "Contact" : null}
            </Button>

            {/*Przycisk do contact ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
              onClick={this.changeButtonDown}
              direction="down"
            >
              <ExpandMoreIcon fontSize="large" />
            </Button>

            {/*Przycisk na dół ^^^  */}
          </ButtonGroup>
        ) : (
          <ButtonGroup orientation="horizontal">
            <Button
              variant="text"
              color="secondary"
              size="large"
              style={buttonStyle}
              onClick={this.changeButtonUp}
              direction="up"
            >
              <ArrowBackIosIcon fontSize="large" />
            </Button>

            {/*Przycisk do góry ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
            >
              <FiberManualRecordIcon
                fontSize={this.state.homeActive ? "large" : "small"}
              />
            </Button>

            {/*Przycisk do home ^^^  */}

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

            {/*Przycisk do about ^^^  */}

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

            {/*Przycisk do projects ^^^  */}

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

            {/*Przycisk do contact ^^^  */}

            <Button
              variant="text"
              color="secondary"
              style={buttonStyle}
              size="large"
              onClick={this.changeButtonDown}
              direction="down"
            >
              <ArrowForwardIosIcon fontSize="large" />
            </Button>
          </ButtonGroup>
        )}
      </nav>
    );
  }
}

export default Nav;
