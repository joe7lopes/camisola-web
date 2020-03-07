import {
  Col, Form, Row,
} from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions';
import { LoadingButton } from '../ui';
import { getSignUpError, isSigningUp } from '../../store/selectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isSaving = useSelector(isSigningUp);
  const errorMessage = useSelector(getSignUpError);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signUp({
      firstName,
      lastName,
      email,
      password,
    }));
  };

  return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Control name="fistName" type="text" placeholder="Nome" value={firstName}
                                      onChange={(e: any) => setFirstName(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Control name="lastName" type="text" placeholder="Apelido" value={lastName}
                                      onChange={(e: any) => setLastName(e.target.value)}/>
                    </Col>
                </Row>
            </Form.Group>
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
                {errorMessage
                && <div className="c-text-sm text-danger">{errorMessage}</div>}
            </Form.Group>
            <LoadingButton
                isLoading={isSaving || false}
                type="submit"
                className="m-b-md"
                disabled={!email || !password || password !== repeatedPassword}>
                Registrar
            </LoadingButton>
        </Form>
  );
};

export default RegistrationForm;
