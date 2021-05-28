import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home.js";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import "../styles/App.scss";

class App extends Component {
  theme = createMuiTheme({
    palette: {
      primary: red,
      secondary: {
        main: "#eeeeee",
      },
      transparent: {},
    },
  });
  render() {
    console.log(this.theme);
    return (
      <MuiThemeProvider theme={this.theme}>
        <div className="container">
          <Nav />
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
