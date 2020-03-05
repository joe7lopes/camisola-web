import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signUp({
      email,
      password,
    }));
  };

  return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control name='email' type="email" placeholder="email" value={email}
                              onChange={(e: any) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Control name='password' type="password" placeholder="Password" value={password}
                              onChange={(e: any) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Control name='password' type="password" placeholder="Repita password" value={repeatedPassword}
                              onChange={(e: any) => setRepeatedPassword(e.target.value)}/>
                {repeatedPassword && password !== repeatedPassword
                && <div className="c-text-sm text-danger">As duas senhas têm de ser iguais</div>}
            </Form.Group>
            <Button
                type="submit"
                className="m-b-md"
                disabled={!email || !password || password !== repeatedPassword}>
                Registrar
            </Button>
        </Form>
  );
};

export default RegistrationForm;
