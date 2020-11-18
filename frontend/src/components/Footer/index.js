import React from "react";
import "./Footer.css";
import { Link as LinkR } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper ">
        <div className="footer__wrapper__top">
          <div className="footer__wrapper__top-item">
            <div className="item__wrapper">
              <LinkR class="navbar__title" to="/">
                Fit<span>Club</span>
                <p>
                  This is a really old post. My views on project structure have
                  changed
                </p>
              </LinkR>
            </div>
            <div className="item__wrapper">
              <h4>Support</h4>
              <a href="#">Talk to Us</a>
              <a href="#">FAQ</a>
              <a href="#">Information</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer__wrapper__top-item">
            <div className="item__wrapper">
              <h4>Fitness Club</h4>
              <a href="#">Pricing</a>
              <a href="#">Events</a>
              <a href="#">Articles</a>
              <a href="#">Our Instructors</a>
            </div>
            <div className="item__wrapper">
              <h4>Our Newsletter</h4>
              <form>
                <input placeholder="Your Email" />
                <button className="btn primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; All Rights Reserved {date}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
