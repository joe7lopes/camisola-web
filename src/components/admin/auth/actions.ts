import {
  action,
  createRequestTypes,
} from '../../../actions';

export interface ISignInData {
    email: string,
    password: string
}

export const SIGN_IN_ADMIN = createRequestTypes('SIGN_IN_ADMIN');
export const SIGN_OUT_ADMIN = createRequestTypes('SIGN_OUT_ADMIN');

// eslint-disable-next-line max-len
export const signIn = (credentials: ISignInData) => action(SIGN_IN_ADMIN.REQUESTED, { ...credentials });
export const signInPending = () => action(SIGN_IN_ADMIN.PENDING, undefined);
export const signInFulfilled = (token: string) => action(SIGN_IN_ADMIN.FULFILLED, { token });
export const signInRejected = (error :any) => action(SIGN_IN_ADMIN.REJECTED, { error });

export const signOut = () => action(SIGN_OUT_ADMIN.REQUESTED, undefined);
