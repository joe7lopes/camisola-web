import { FETCH_SETTINGS_FULFILLED, UPDATE_SETTINGS_FULFILLED } from '../actions';
import { ISettings } from '../types';

interface IProps {
  type: string,
  payload: ISettings
}

export default (state = {}, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_SETTINGS_FULFILLED:
      return payload;
    case UPDATE_SETTINGS_FULFILLED:
      return payload;
    default:
      return state;
  }
};
