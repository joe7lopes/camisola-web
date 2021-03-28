import { IRequest } from '../types';
import {
  CREATE_PRODUCT_FULFILLED,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_REJECTED, DELETE_PRODUCT_FULFILLED,
  RESET_PRODUCT_CREATION,
} from '../actions';

const INITIAL_STATE: IRequest = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case CREATE_PRODUCT_PENDING:
      return { ...state, loading: true };
    case CREATE_PRODUCT_FULFILLED:
      return { ...state, loading: false, data: payload };
    case CREATE_PRODUCT_REJECTED:
      return { ...state, loading: false, error: payload };
    case DELETE_PRODUCT_FULFILLED:
      return { ...state, loading: false, data: true };
    case RESET_PRODUCT_CREATION:
      return INITIAL_STATE;
    default:
      return state;
  }
};
