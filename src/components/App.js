import React, { Component } from "react";
//
import Nav from "./Nav";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
//
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
//
import "../styles/App.scss";

class App extends Component {
  state = {
    site: 1,

    width: null,
    height: null,
  };
  theme = createMuiTheme({
    palette: {
      primary: red,
      secondary: {
        main: "#eeeeee",
      },
      transparent: {},
    },
  });

  handleCallback = (childData) => {
    this.setState({ site: childData });
  };

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        {/* 
        //! Dodaj animacje do pasków skilli
      //* Dodaj animacje do pasków skilli
      //? Dodaj animacje do pasków skilli 
      */}
        <div className="container">
          <Nav
            parentCallback={this.handleCallback}
            onChange={this.handleCallback}
          />
          {this.state.site === 1 ? <Home /> : null}
          {this.state.site === 2 ? <About /> : null}
          {this.state.site === 3 ? <Projects /> : null}
          {this.state.site === 4 ? <Contact /> : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
