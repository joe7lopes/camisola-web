import React, { useState } from 'react';
import {
  Modal,
} from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const LoginModal = ({ show, onHide }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const message = selectedTab === 0 ? 'Aceda a sua conta' : 'Crie uma nova conta';

  return (
        <Modal
            show={show}
            onHide={onHide}
            onExited={() => setSelectedTab(0)}>
            <Modal.Header closeButton>{message}</Modal.Header>
            <Modal.Body>
                {selectedTab === 0
                  ? <LoginForm handleShowRegistration={() => setSelectedTab(1)}/>
                  : <RegistrationForm/>}
            </Modal.Body>
        </Modal>
  );
};

export default LoginModal;
