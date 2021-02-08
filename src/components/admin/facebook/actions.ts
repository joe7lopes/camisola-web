import { action, createRequestTypes } from '../../../actions';

// eslint-disable-next-line import/prefer-default-export
export const UPDATE_FB_TOKEN = createRequestTypes('UPDATE_FB_TOKEN');

export const updateFbToken = (token :string) => action(UPDATE_FB_TOKEN.REQUESTED, { token });
export const updateFbTokenPending = () => action(UPDATE_FB_TOKEN.PENDING, undefined);
export const updateFbTokenFulfilled = (data: any) => action(UPDATE_FB_TOKEN.FULFILLED, { data });
export const updateFbTokenRejected = (error :any) => action(UPDATE_FB_TOKEN.REJECTED, { error });
