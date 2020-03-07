import React, {useState} from 'react';
import {
    Modal,
} from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import ResetPassword from "./ResetPassword";

enum Tab {
    SIGN_IN,
    SIGN_UP,
    PASSWORD_RESET

}

const headerMessage = (tab: Tab) => {
    switch (tab) {
        case Tab.SIGN_IN: return 'Aceda à sua conta';
        case Tab.SIGN_UP: return 'Crie uma nova conta';
        case Tab.PASSWORD_RESET: return 'Recuperar senha';
    }
};

const LoginModal = ({show, onHide}: any) => {
    const [selectedTab, setSelectedTab] = useState(Tab.SIGN_IN);

    const renderComponent = (tab: Tab) => {
        switch (tab) {
            case Tab.SIGN_IN:
                return <LoginForm
                    handleShowRegistration={() => setSelectedTab(Tab.SIGN_UP)}
                    handlePasswordRecovery={() => setSelectedTab(Tab.PASSWORD_RESET)}/>;
            case Tab.SIGN_UP:
                return <RegistrationForm/>;
            case Tab.PASSWORD_RESET:
                return <ResetPassword/>;
            default:
                return <LoginForm/>
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            onExited={() => setSelectedTab(Tab.SIGN_IN)}>
            <Modal.Header closeButton>{headerMessage(selectedTab)}</Modal.Header>
            <Modal.Body>
                {renderComponent(selectedTab)}
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
