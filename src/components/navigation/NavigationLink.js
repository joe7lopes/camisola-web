import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavigationLink = ({ displayName, destination }) => {
  return (
    <Nav.Link as="div">
      <NavLink
        style={{ paddingBottom: '8px', color: 'black' }}
        to={destination}
        activeStyle={{ borderBottom: '0.10rem solid black' }}>
        {displayName}
      </NavLink>
    </Nav.Link>
  );
};

export default NavigationLink;
