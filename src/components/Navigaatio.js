import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Component.css";

import { ReactComponent as Contact } from "../icons/Contact.svg";
import { ReactComponent as Hammer } from "../icons/Hammer.svg";
import { ReactComponent as Info } from "../icons/Info.svg";
import { ReactComponent as Kitchen } from "../icons/Kitchen.svg";
import { ReactComponent as Handtool } from "../icons/Handtool.svg";
import { ReactComponent as Sauna } from "../icons/Sauna.svg";

function Navigaatio() {
  return (
    <div className="navbaari">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="transparent"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/">
                <Hammer className="icon" width="40px" height="40px" />
              </Link>
              <Link to="/Info">
                <Info className="icon" width="40px" height="40px" />
              </Link>
              <Link to="/Keittiö">
                <Kitchen className="icon" width="40px" height="40px" />
              </Link>
              <Link to="/Kylpyhuone">
                <Sauna className="icon" width="40px" height="40px" />
              </Link>
              <Link to="/Muut">
                <Handtool className="icon" width="40px" height="40px" />
              </Link>
              <Link to="/ContactForm">
                <Contact className="icon" width="40px" height="40px" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigaatio;
