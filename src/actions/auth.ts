import {
  SIGN_IN,
  SIGN_IN_FULFILLED,
  SIGN_IN_PENDING,
  SIGN_IN_REJECTED, SIGN_UP, SIGN_UP_FULFILLED,
} from './actionTypes';

export interface ISignInData {
  email: string,
  password: string
}

export interface ISignInAction {
  type: string,
  payload: ISignInData
}

export const signIn = (credentials: ISignInData) => ({
  type: SIGN_IN,
  payload: credentials,
});

export const signInPending = () => ({
  type: SIGN_IN_PENDING,
});

export const signInFulfilled = (authToken: string) => ({
  type: SIGN_IN_FULFILLED,
  payload: authToken,
});

export const signInRejected = (error: string) => ({
  type: SIGN_IN_REJECTED,
  payload: error,
});

export const signUp = (data: any) => ({
  type: SIGN_UP,
  payload: data,
});

export const signUpPending = () => ({
  type: SIGN_UP,
});

export const signUpFulfilled = () => ({
  type: SIGN_UP_FULFILLED,
});

export const signUpRejected = (err: string) => ({
  type: SIGN_UP_FULFILLED,
  payload: err,
});
