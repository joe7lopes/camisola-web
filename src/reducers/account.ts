import { SAVE_PERSONAL_DATA_FULFILLED } from '../actions/actionTypes';

interface IProps {
  type: string,
  payload: any
}

const account = (state = {}, { type, payload }: IProps) => {
  switch (type) {
    case SAVE_PERSONAL_DATA_FULFILLED:
      return { ...state, personalDetails: payload };

    default:
      return state;
  }
};
export default account;
