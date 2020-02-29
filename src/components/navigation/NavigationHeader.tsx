import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import path from '../../routes/path';
import ShoppingCart from './ShoppingCart';

const {
  PORTUGAL, BENFICA, SPORTING, PORTO, OUTROS, CRIANCAS,
} = path;
const headerLinks = new Map();

headerLinks.set(PORTUGAL, 'Portugal');
headerLinks.set(BENFICA, 'Benfica');
headerLinks.set(SPORTING, 'Sporting');
headerLinks.set(OUTROS, 'Outros');
headerLinks.set(PORTO, 'Porto');
headerLinks.set(CRIANCAS, 'Crianças');

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const keys:string[] = headerLinks.keys();
const NavigationHeader = () => (
  <div style={{ backgroundColor: 'white' }}>
  <Navbar
    className="c-lock-width"
    sticky="top"
    fixed="top"
    bg="white"
    expand="lg"
    role="navigation"
    as="header"
  >
    <Navbar.Brand as="div">
      <Link to="/">
        <img
        alt="home"
          style={{ height: '6rem' }}
          src="https://camisola10.com/wp-content/uploads/2018/10/LogoWidth200.png"
        />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {renderLinks(keys)}
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <ShoppingCart />
      <Navbar.Text>
        <Link to={path.ACCOUNT}> USER NAME</Link>
        <Link to={path.HOME}> Login / Logout</Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

export default NavigationHeader;

const renderLinks = (headers:string[]) => [...headers].map((link) => (
    <NavigationLink
        key={link}
        displayName={headerLinks.get(link)}
        destination={link}
    />
));
