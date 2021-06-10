import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";

const itemStyle = { width: "10vh", height: "10vh", position: "absolute" };

class Contact extends Component {
  state = {
    width: null,
    height: null,
  };
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

  render() {
    window.addEventListener("resize", this.getWindowDimensions);
    let width = this.state.width;
    console.log(width);
    return (
      <React.Fragment>
        <div className="Contact content">
          <div className="title contactTitle">
            <h1 id="titleLabel">Contact</h1>
          </div>
          {width >= 1024 ? (
            <>
              <div className="buttonContainer">
                <div orientation="horizontal" className="ButtonGroupContainer">
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    onClick={() => {
                      document
                        .getElementById("mail")
                        .classList.toggle("hidden");
                    }}
                  >
                    <MailIcon style={itemStyle} color="secondary" />
                    <div id="mail" className="hidden mail">
                      sieniu212@gmail.com
                    </div>
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    href="https://github.com/Sagittarius-py"
                  >
                    <GitHubIcon style={itemStyle} color="secondary" />
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    href="https://www.linkedin.com/in/filip-sieniawski-s70/"
                  >
                    <LinkedInIcon style={itemStyle} color="secondary" />
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    onClick={() => {
                      document
                        .getElementById("phone")
                        .classList.toggle("hidden");
                    }}
                  >
                    <PhoneIcon style={itemStyle} color="secondary" />
                    <div id="phone" className="hidden phone">
                      <span>+48 577-371-102</span>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="contactForm">
                <h1>In future - contact form handled with node.js</h1>
              </div>
            </>
          ) : (
            <>
              <div className="buttonContainer">
                <div orientation="vertical" className="ButtonGroupContainer">
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    onClick={() => {
                      document
                        .getElementById("mail")
                        .classList.toggle("hidden");
                    }}
                  >
                    <MailIcon style={itemStyle} color="secondary" />
                    <div id="mail" className="hidden mail">
                      sieniu212@gmail.com
                    </div>
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    href="https://github.com/Sagittarius-py"
                  >
                    <GitHubIcon style={itemStyle} color="secondary" />
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    href="https://www.linkedin.com/in/filip-sieniawski-s70/"
                  >
                    <LinkedInIcon style={itemStyle} color="secondary" />
                  </Button>
                  <Button
                    variant="contained"
                    className="contactButton"
                    color="primary"
                    onClick={() => {
                      document
                        .getElementById("phone")
                        .classList.toggle("hidden");
                    }}
                  >
                    <PhoneIcon style={itemStyle} color="secondary" />
                    <div id="phone" className="hidden phone">
                      <span>+48 577-371-102</span>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="contactForm">
                <h1>In future - contact form handled with node.js</h1>
              </div>
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
