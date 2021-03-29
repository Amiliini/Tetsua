import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../images/sauna.svg";

function Navigaatio() {
  return (
    <div>
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
              <Link to="/">Home</Link>
              <Link to="/Keittiö">Keittiö</Link>
              <Link to="/Kylpyhuone">
                <Icon />
              </Link>
              <Link to="/Muut">Muut</Link>
              <Link to="/ContactForm">ContactForm</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigaatio;
