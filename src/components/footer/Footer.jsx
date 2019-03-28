import React from "react";
import logo from "../../logo.svg";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <Slide right duration={1000}>
      <footer style={{ background: "#aa2930" }}>
        <div className="footer_logo">
          <img
            src={logo}
            alt="psg"
            title="psg"
            style={{ height: "70px", width: "70px" }}
          />
        </div>
        <div className="footer_disc">
          Paris San Girman 2019.All rights resrved.
        </div>
      </footer>
    </Slide>
  );
};

export default Footer;
