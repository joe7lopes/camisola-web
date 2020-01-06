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
      <Navbar.Brand href="/">Camisola10</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="portugal">Portugal</Nav.Link>
          <Nav.Link href="benfica">Benfica</Nav.Link>
          <Nav.Link href="porto">Porto</Nav.Link>
          <Nav.Link href="sporting">Sporting</Nav.Link>
          <Nav.Link href="outros">Outros</Nav.Link>
          <Nav.Link href="criancas">Crianças</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationHeader;
