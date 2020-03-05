import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = ({ handleShowRegistration }: any) => {
  const handleOnSubmit = (e:any) => {
    console.log(e);
  };

  return (
    <>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control type="email" placeholder="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button type="submit" className="m-b-md">Login</Button>
            </Form>
            <div className="c-link-text" onClick={handleShowRegistration}>Registar nova conta ?</div>
    </>

  );
};

export default LoginForm;
