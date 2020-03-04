import React, { useState } from 'react';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';

const LoginModal = ({ show, onHide }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);


  const renderLogin = () => (
    <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="email"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
      <div>Registar nova conta ?</div>
    </>
  );

  const renderRegister = () => (<div>register</div>);

  return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            onHide={onHide}
            aria-labelledby="m-title">
            <Modal.Header closeButton>
                <Modal.Title id="m-title">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Row className="text-center">
                <Col onClick={() => setSelectedTab(0)}>Login</Col>
                <Col onClick={() => setSelectedTab(1)}>Register</Col>
            </Row>
            {selectedTab === 0 ? renderLogin() : renderRegister()}
        </Modal>
  );
};

export default LoginModal;
