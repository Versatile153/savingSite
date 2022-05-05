import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Trade</a>
            <a href="#">&bull; telegram</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Facebook</a>
            <a href="#">&bull; Telgram</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Nsukka.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +2348127251280.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: 
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: ceze46321@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.savings.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright 2021. Revolution saver</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
