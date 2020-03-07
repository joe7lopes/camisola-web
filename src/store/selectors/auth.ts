import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getAuth = (state: IRootState) => state.auth;

export const getSignUpError = createSelector(
  [getAuth],
  (auth) => auth.signUpError,
);

export const getSignInError = createSelector(
  [getAuth],
  (auth) => auth.signInError,
);

export const getResetPasswordError = createSelector(
  [getAuth],
  (auth) => auth.resetPasswordError,
);
