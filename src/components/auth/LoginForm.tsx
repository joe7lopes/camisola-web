import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signIn } from '../../actions';

const LoginForm = ({ handleShowRegistration }: any) => {
  const dispatch = useDispatch();
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signIn({
      email: e.target.elements['email'].value,
      password: e.target.elements['pass'].value,
    }));
  };

  return (
    <>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control name="email" type="email" placeholder="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control name="pass" type="password" placeholder="Password"/>
                </Form.Group>
                <Button type="submit" className="m-b-md">Login</Button>
            </Form>
            <div className="c-link-text" onClick={handleShowRegistration}>Registar nova conta ?</div>
    </>

  );
};

export default LoginForm;
