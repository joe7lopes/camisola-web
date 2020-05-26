import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoginSuccess } from '../store/selectors';

const AdminRoute = ({ component: Component, ...rest }) => {
  const loginSuccess = useSelector(isLoginSuccess);
  return (
    <Route {...rest} render={(props) => (
      loginSuccess
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}/>
    )}/>
  );
};

export default AdminRoute;
