import React, { useState } from 'react';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';

const LoginModal = ({ show, onHide }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);


  const renderLogin = () => (
    <>
            <Form>
                <Form.Group>
                    <Form.Control type="email" placeholder="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button type="submit" className="m-b-md">Login</Button>
            </Form>
            <div className="c-link-text" onClick={() => setSelectedTab(1)}>Registar nova conta ?</div>
    </>
  );

  const renderRegister = () => (
        <Form>
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


  return (
        <div>
            <Modal
                backdrop={false}
                show={show}
                onHide={onHide}>
                <Modal.Header closeButton>ss</Modal.Header>
                <Modal.Body>
                    {selectedTab === 0 ? renderLogin() : renderRegister()}
                </Modal.Body>
            </Modal>
        </div>
  );
};

export default LoginModal;
