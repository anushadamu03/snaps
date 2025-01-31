import React from "react";
import facebook from "../../assets/images/Facebook.svg";
import xtwitter from "../../assets/images/X_twitter.svg";
import instagram from "../../assets/images/Instagram.svg";
import pintrest from "../../assets/images/Pinterest.svg";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer-section">
     <div className="footer">
      <div>
        <h1>Snaps</h1>
      </div>
      <div className="footer-content">
        <div>
          <ul>
            <li>For photographers</li>
            <li>Hire talent</li>
            <li>Inspiration</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-icon" >
          <ul>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={xtwitter} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={pintrest} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
        
        <ul>
            <li>© 2024 Snaps</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
        </ul>
    </div>
    </div>
   
  );
};

export default Footer;
