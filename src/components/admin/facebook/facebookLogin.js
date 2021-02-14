import React, { useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { useDispatch, useSelector } from 'react-redux';
import { updateFbToken, updateFbTokenRejected } from './login/actions';

const FacebookLogin = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const reviewsError = useSelector((state) => state.adminNew.facebookReviews.error);

  const handleOncomplete = (data) => {
    const shortLivedToken = data.tokenDetail.accessToken;
    dispatch(updateFbToken(shortLivedToken));
  };

  const handleOnError = (fbError) => {
    dispatch(updateFbTokenRejected(fbError));
    setError(fbError);
  };

  return (
    <>
            {error && <div>Ocorreu um error no login</div>}
            {reviewsError && <div>{reviewsError}</div>}
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
