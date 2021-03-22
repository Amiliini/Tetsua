import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigaatio() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/Keittiö">Keittiö</Link>
              <Link to="/Kylpyhuone">Kylpyhuone</Link>
              <Link to="/Muut">Muut</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigaatio;
