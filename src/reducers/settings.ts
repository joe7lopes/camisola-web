import { FETCH_SETTINGS_FULFILLED, SAVE_SIZES_FULFILLED } from '../actions/actionTypes';

interface IProps {
  type: string,
  payload: any
}

export default (state = {}, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_SETTINGS_FULFILLED:
      return payload;
    case SAVE_SIZES_FULFILLED:
      return { ...state, sizes: payload };
    default:
      return state;
  }
};
