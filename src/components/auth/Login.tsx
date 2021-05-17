import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoadingButton } from '../ui';
import { signIn } from '../admin/auth/actions';
import { IRootState } from '../../types';
import Alert, { AlertType } from '../ui/Alert';
import path from '../../routes/path';
import { isLoggedIn } from '../admin/auth/selector';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state:IRootState) => state.adminNew.auth);
  const isUserLoggedIn = useSelector(isLoggedIn);

  if (isUserLoggedIn) {
    return <Redirect to={path.ADMIN} />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
        <Grid
            className="m-t-lg"
            container
            direction="column"
            justify="center"
            alignItems="center">
            <form onSubmit={handleSubmit}>
                <Grid >
                <TextField name="email" label="email" type="email" variant="outlined" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                </Grid>
                <Grid >
                <TextField name="password" label="Password" type="password" variant="outlined" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                </Grid>
                <LoadingButton className="m-t-md" isLoading={loading} size="lg" type="submit">Login</LoadingButton>
            </form>
            {error && <Alert type={AlertType.ERROR}>{error}</Alert>}
        </Grid>
  );
};

export default Login;
