import React, { useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { useDispatch } from 'react-redux';
import { updateFbToken, updateFbTokenRejected } from './actions';

const FacebookLogin = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleOncomplete = (data) => {
    const shortLivedToken = data.tokenDetail.accessToken;
    dispatch(updateFbToken(shortLivedToken));
  };

  const handleOnError = (error) => {
    dispatch(updateFbTokenRejected(error));
    setError(error);
  };

  return (
    <>
            {error && <div>Ocorreu um error no login</div>}
        <FacebookProvider wait appId="712092559490695">
            <LoginButton
                scope="email"
                onCompleted={handleOncomplete}
                onError={handleOnError}>
                <span>Login via Facebook</span>
            </LoginButton>
        </FacebookProvider>
    </>
  );
};

export default FacebookLogin;
