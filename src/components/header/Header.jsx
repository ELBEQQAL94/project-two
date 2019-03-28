import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="static"
        style={{
          background: "#1474ae",
          padding: "10px 0",
          borderBottom: "10px solid black"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <Slide left duration={1000}>
              <div className="header_logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="psg"
                    title="psg"
                    style={{ height: "200px" }}
                  />
                </Link>
              </div>
            </Slide>
          </div>
          <Fade right deration={1000}>
            <Link to="/the_team">
              <Button
                color="inherit"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  fontFamily: "Source Sans Pro, sans-serif"
                }}
              >
                the team
              </Button>
            </Link>
            <Link to="/the_matches">
              <Button
                color="inherit"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  fontFamily: "Source Sans Pro, sans-serif"
                }}
              >
                matches
              </Button>
            </Link>
          </Fade>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
