import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import path from '../routes/path';

const NavigationHeader = () => (
    <Navbar
      sticky="top"
      fixed="top"
      variant="light"
      stybg="dark"
      bg="light"
      expand="lg"
      role="navigation"
      as="header">
      <Navbar.Brand as="div">
        <Link to='/'>Camisola10</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Object.keys(path).map((r) => {
            const routeName = r.toLowerCase();
            return <Nav.Link as="div" key={routeName}><Link to={`/${routeName}`}>{routeName}</Link></Nav.Link>;
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);

export default NavigationHeader;
