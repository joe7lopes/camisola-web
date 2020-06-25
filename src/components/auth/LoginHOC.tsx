import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import path from '../../routes/path';
import { isLoginSuccess } from '../../store/selectors';
import LoginModal from './LoginModal';

const LoginHOC = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(true);
  const loginSuccess = useSelector(isLoginSuccess);
  // const unAuthorized = useSelector(isUnAuthorized);
  const history = useHistory();

  if (loginSuccess) {
    history.push(path.ADMIN);
  }

  return (
      <LoginModal show={loginModalVisible} onHide={() => setLoginModalVisible(false)}/>
  );
};

export default LoginHOC;
