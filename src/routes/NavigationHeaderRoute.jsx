import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NavigationHeader } from '../components';

const NavigationHeaderRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      <>
            <NavigationHeader/>
            <Container fluid>
                <Component {...props}/>
            </Container>
      </>
    )}/>
);

export default NavigationHeaderRoute;
