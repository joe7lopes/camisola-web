import React, { useState } from 'react';
import {
  Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../actions';
import { LoadingButton } from '../ui';
import { getSignInError, isSigningIn } from '../../store/selectors';

const LoginForm = ({ handleShowRegistration, handlePasswordRecovery }: any) => {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector(isSigningIn);
  const errorMessage = useSelector(getSignInError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signIn({
      email,
      password,
    }));
  };

  return (
    <>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control name="email" type="email" placeholder="email" value={email}
                                  onChange={(e: any) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control name="pass" type="password" placeholder="Password" value={password}
                                  onChange={(e: any) => setPassword(e.target.value)}/>
                    {errorMessage
                    && <div className="c-text-sm text-danger">{errorMessage}</div>}
                    <div className="c-text-sm c-link-text" onClick={handlePasswordRecovery}>Não me lembro da senha</div>
                </Form.Group>

                <LoadingButton
                    type="submit"
                    className="m-b-md"
                    disabled={!email || !password}
                    isLoading={isLoggingIn || false}>
                    Login
                </LoadingButton>
            </Form>
            <div className="c-link-text" onClick={handleShowRegistration}>Registar nova conta ?</div>
    </>

  );
};

export default LoginForm;
