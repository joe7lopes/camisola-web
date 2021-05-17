import jwt from 'jwt-decode';
import { createSelector } from 'reselect';
import { IRootState } from '../../../types';

const adminAuthState = (state: IRootState) => state.adminNew.auth;

// eslint-disable-next-line import/prefer-default-export
export const isLoggedIn = createSelector(
  [adminAuthState],
  (auth) => auth.token && !isTokenExpired(auth.token),
);

const isTokenExpired = (tokenStr: string) => {
  const { exp } = jwt(tokenStr);
  return Date.now() >= exp * 1000;
};
