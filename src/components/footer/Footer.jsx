import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerUpper">
          <div className="footerLeft">
            <p className="footerLogo">Ashar</p>
            <p>I am a Frontend Developer from India</p>
          </div>
          <div className="footerRight">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="rights">
          <p>@ 2025 Ashar Farooq.All rights reserved</p>
          <div className="ploicies">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
