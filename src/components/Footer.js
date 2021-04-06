import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <p className="cal-sm">
        &copy;{new Date().getFullYear()} TETSUA rakennus | All rights reserved |
        Terms of service
      </p>
    </div>
  );
}

export default Footer;
