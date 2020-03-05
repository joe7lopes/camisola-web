import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signIn } from '../../actions';

const LoginForm = ({ handleShowRegistration }: any) => {
  const dispatch = useDispatch();
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
                </Form.Group>
                <Button type="submit" className="m-b-md">Login</Button>
            </Form>
            <div className="c-link-text" onClick={handleShowRegistration}>Registar nova conta ?</div>
    </>

  );
};

export default LoginForm;
