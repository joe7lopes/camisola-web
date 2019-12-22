import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationHeader() {
  return (
    <Navbar
      sticky="top"
      fixed="top"
      variant="light"
      stybg="dark"
      bg="light"
      expand="lg"
      role="navigation"
      as="header"
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Portugal</Nav.Link>
          <Nav.Link href="#link">Benfica</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationHeader;
