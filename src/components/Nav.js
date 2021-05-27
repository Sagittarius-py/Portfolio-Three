import React, { Component } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/Nav.scss";

const transparent = {
  background: "rgba( 255, 255, 255, 0.15 )",
  boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.20 )",
  backdropFilter: "blur( 8.0px )",
  WebkitBackdropFilter: "blur( 8.0px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  width: "200px",
  height: "70px",
};

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button
            variant="contained"
            color="primary"
            style={transparent}
            size="large"
          >
            <ExpandLessIcon fontSize="large" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={transparent}
            size="large"
          >
            <FiberManualRecordIcon fontSize="medium" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={transparent}
            size="large"
          >
            <ExpandMoreIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </nav>
    );
  }
}

export default Nav;
