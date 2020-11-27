import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import path from '../../routes/path';
import ShoppingCart from './ShoppingCart';

const {
  PORTUGAL,
  BENFICA,
  SPORTING,
  PORTO,
  OUTROS,
  PROMOCOES,
  CRIANCAS,
} = path;
const headerLinks = new Map();

headerLinks.set(PORTUGAL, 'Portugal');
headerLinks.set(BENFICA, 'Benfica');
headerLinks.set(SPORTING, 'Sporting');
headerLinks.set(OUTROS, 'Outros');
headerLinks.set(PROMOCOES, 'Promoções');
headerLinks.set(PORTO, 'Porto');
headerLinks.set(CRIANCAS, 'Crianças');

const NavigationHeader = () => (
  <>
            <div style={{ backgroundColor: 'white' }} className="m-b-xs">
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
                                src="https://camisola-backend.s3-eu-west-1.amazonaws.com/LogoWidth200.png"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            {/* not working when modal opens {renderLinks(keys)} */}
                            <NavigationLink
                                displayName={headerLinks.get(PROMOCOES)}
                                destination={PROMOCOES}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(PORTUGAL)}
                                destination={PORTUGAL}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(BENFICA)}
                                destination={BENFICA}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(PORTO)}
                                destination={PORTO}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(SPORTING)}
                                destination={SPORTING}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(CRIANCAS)}
                                destination={CRIANCAS}
                            />
                            <NavigationLink
                                displayName={headerLinks.get(OUTROS)}
                                destination={OUTROS}
                            />
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <ShoppingCart />
                    </Navbar.Collapse>
                </Navbar>
            </div>
  </>
);
export default NavigationHeader;
