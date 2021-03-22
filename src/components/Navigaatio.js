import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigaatio() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Keittiö">Keittiö</Nav.Link>
              <Nav.Link href="/Kylpyhuone">Kylpyhuone</Nav.Link>
              <Nav.Link href="/Muut">Muut</Nav.Link>
              <Nav.Link href="/Yhteydenotto">Yhteydenotto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigaatio;
