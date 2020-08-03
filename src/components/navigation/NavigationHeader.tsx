import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
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
  CRIANCAS,
} = path;
const headerLinks = new Map();

headerLinks.set(PORTUGAL, 'Portugal');
headerLinks.set(BENFICA, 'Benfica');
headerLinks.set(SPORTING, 'Sporting');
headerLinks.set(OUTROS, 'Outros');
headerLinks.set(PORTO, 'Porto');
headerLinks.set(CRIANCAS, 'Crianças');

const NavigationHeader = () =>
// const user = useSelector(getUser);

// const renderLogin = () => {
//   if (user) {
//     return <Link to={path.ACCOUNT}><div className="m-l-lg">{user?.firstName}</div> </Link>;
//   }
//   return <div className="m-l-lg"
//   onClick={() => setLoginModalVisible(true)}> Login | registrar</div>;
// };

  (
    <>
            <div style={{ backgroundColor: 'white' }}>
                <Container>
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
                        <Navbar.Text>
                            {/* {renderLogin()} */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                </Container>
            </div>
    </>
  );
export default NavigationHeader;
