import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '../ui';
import { getResetPasswordError, isResettingPassword } from '../../store/selectors';
import { resetPassword } from '../../actions';
const ResetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const isLoading = useSelector(isResettingPassword);
  const errorMessage = useSelector(getResetPasswordError);

  const handleResetPassword = (event: any) => {
    event.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
        <div>
            <Form onSubmit={handleResetPassword}>
                <Form.Group>
                    <Form.Control name="email" type="email" placeholder="email" value={email}
                                  onChange={(e: any) => setEmail(e.target.value)}/>
                    {errorMessage
                    && <div className="c-text-sm text-danger">{errorMessage}</div>}
                </Form.Group>
                <LoadingButton
                    type="submit"
                    className="m-b-md"
                    disabled={!email}
                    isLoading={isLoading || false}>
                    Recuperar senha
                </LoadingButton>
            </Form>
        </div>
  );
};

export default ResetPassword;
