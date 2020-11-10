import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper container"></div>
      <p>&copy; All Rights Reserved {date}</p>
    </footer>
  );
};

export default Footer;
