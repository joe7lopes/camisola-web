import {
  RESET_PASSWORD, RESET_PASSWORD_FULFILLED, RESET_PASSWORD_PENDING, RESET_PASSWORD_REJECTED,
  SIGN_IN,
  SIGN_IN_FULFILLED,
  SIGN_IN_PENDING,
  SIGN_IN_REJECTED, SIGN_OUT, SIGN_OUT_FULFILLED, SIGN_OUT_PENDING,
  SIGN_UP,
  SIGN_UP_FULFILLED,
  SIGN_UP_PENDING,
  SIGN_UP_REJECTED,
} from './actionTypes';

export interface ISignInData {
    email: string,
    password: string
}

export interface ISignUpData {
    firstName: string,
    lastName: string,
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

export const signInFulfilled = (token: string) => ({
  type: SIGN_IN_FULFILLED,
  payload: token,
});

export const signInRejected = (error: string) => ({
  type: SIGN_IN_REJECTED,
  payload: error,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signOutPending = () => ({
  type: SIGN_OUT_PENDING,
});

export const signOutFulfilled = () => ({
  type: SIGN_OUT_FULFILLED,
});

export const signUp = (data: ISignUpData) => ({
  type: SIGN_UP,
  payload: data,
});

export const signUpPending = () => ({
  type: SIGN_UP_PENDING,
});

export const signUpFulfilled = () => ({
  type: SIGN_UP_FULFILLED,
});

export const signUpRejected = (err: string) => ({
  type: SIGN_UP_REJECTED,
  payload: err,
});

export const resetPassword = (email: string) => ({
  type: RESET_PASSWORD,
  payload: email,
});

export const resetPasswordPending = () => ({
  type: RESET_PASSWORD_PENDING,
});


export const resetPasswordFulfilled = () => ({
  type: RESET_PASSWORD_FULFILLED,
});

export const resetPasswordRejected = (error: string) => ({
  type: RESET_PASSWORD_REJECTED,
  payload: error,
});
