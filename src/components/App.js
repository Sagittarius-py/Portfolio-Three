import React, { Component } from "react";
import Nav from "./Nav";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, amber } from "@material-ui/core/colors";
import "../styles/App.scss";

class App extends Component {
  theme = createMuiTheme({
    palette: {
      primary: red,
      secondary: {
        main: amber[500],
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
