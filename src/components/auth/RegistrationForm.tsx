import { Button, Form } from 'react-bootstrap';
import React from 'react';

const RegistrationForm = () => {
  const handleSubmit = (e:any) => {
    console.log(e);
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control type="email" placeholder="email"/>
        </Form.Group>
        <Form.Group>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group>
            <Form.Control type="password" placeholder="Repita password"/>
        </Form.Group>
        <Button type="submit" className="m-b-md">Registrar</Button>
    </Form>
  );
};

export default RegistrationForm;
