import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "../styles/Nav.scss";

const transparent = {
  background: "rgba( 255, 255, 255, 0.15 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 8.0px )",
  WebkitBackdropFilter: "blur( 8.0px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <Button
          variant="contained"
          color="primary"
          style={transparent}
          size="large"
        >
          Witam{" "}
        </Button>
      </nav>
    );
  }
}

export default Nav;
