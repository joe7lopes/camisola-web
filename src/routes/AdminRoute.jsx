import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {
  // const token = localStorage.getItem('camisola10-u-token');
  const { token } = useSelector((state) => state.adminNew.auth);

  return (
    <Route {...rest} render={(props) => (
      token
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}/>
    )}/>
  );
};

export default AdminRoute;
