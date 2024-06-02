import React from "react";
import "../custom/footer.css";
import gh from "../assets/github.png";
import ig from "../assets/instagram.png";
import ln from "../assets/linkedin.png";
import lg from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={gh} alt="" />
          <img src={ig} alt="" />
          <img src={ln} alt="" />
        </div>
        <div className="logo-f">
          <img src={lg} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};
export default Footer;
