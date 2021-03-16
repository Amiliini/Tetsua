import React, { useState } from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TETSUA
          </Link>
          <div className="menu-icon">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
