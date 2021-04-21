import React from "react";

import LeafLeftImg from "../../Images/leaff.png";
import Facebook from "../../Images/Group 4745.svg";
import Linkedin from "../../Images/Group 4746.svg";
import Youtube from "../../Images/Group 4747.svg";
import Instagram from "../../Images/Group 7587.svg";
import Email from "../../Images/email.svg";
import Phone from "../../Images/phone.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={LeafLeftImg} alt="LeafLeftImg" className="footer-left-img" />
      </div>

      <div className="footer-center">
        <div className="fc-top">
          <div className="footer-top-content">
            <img src={Email} alt="mail" />
            <div className="logo-text">
              <h6>Email id</h6>
              <p>xyz@laxmi.com</p>
            </div>
          </div>

          <div className="footer-top-content">
            <img src={Phone} alt="phonelogo" />
            <div className="logo-text">
              <h6>Phone No.</h6>
              <p>1234567890</p>
            </div>
          </div>
        </div>

        <div className="fc-center">
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={Facebook} alt="Facebook" />
        </div>

        <div className="fc-bottom">
          <div className="fc-bottom-content">
            <p>Terms & Conditions &nbsp; |</p>
          </div>

          <div className="fc-bottom-content">
            <p>Privacy Policy &nbsp; |</p>
          </div>
          <div className="fc-bottom-content">
            <p>Copyrights Reserved @ Laxmi &nbsp; |</p>
          </div>
          <div className="fc-bottom-content">
            <p>Crafted by Togglehead.in &nbsp; </p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <img src={LeafLeftImg} alt="LeafLeftImg" className="footer-right-img" />
      </div>
    </div>
  );
};

export default Footer;
