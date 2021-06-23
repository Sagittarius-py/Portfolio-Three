import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";

const itemStyle = { width: "10vh", height: "10vh"   };

function Vertical() {
  return (
    <>
      <div className="buttonContainer">
        <div orientation="vertival" className="ButtonGroupContainer">
          <Button
            variant="contained"
            className="contactButton"
            color="primary"
            onClick={() => {
              document.getElementById("mail").classList.toggle("hidden");
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
              document.getElementById("phone").classList.toggle("hidden");
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
  );
}

export default Vertical;
