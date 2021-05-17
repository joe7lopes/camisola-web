import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../components/admin/auth/selector';

const AdminRoute = ({ component: Component, ...rest }) => {
  const isLoggedInUser = useSelector(isLoggedIn);
  return (
        <Route {...rest} render={(props) => (
          isLoggedInUser
            ? <Component {...props}/>
            : <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}/>
        )}/>
  );
};

export default AdminRoute;
