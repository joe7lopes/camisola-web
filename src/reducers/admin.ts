import { FETCH_IMAGES_FULFILLED } from '../actions';
import { IAdminState } from '../types';

const INITIAL_STATE: IAdminState = {
  images: [],
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_IMAGES_FULFILLED:
      return { ...state, images: payload };
    default:
      return state;
  }
};
