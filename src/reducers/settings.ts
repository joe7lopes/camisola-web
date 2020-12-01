import {
  FETCH_SETTINGS_FULFILLED,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_REJECTED,
} from '../actions';
import { ISettings } from '../types';

interface IProps {
  type: string,
  payload: ISettings
}

const INITIAL_STATE: ISettings = {
  sizes: [],
  productCategories: [],
  stampingExtraCost: 0,
  productDefaultPrice: 0,
  homePageLayout: {
    benficaProductsOrder: [],
    sportingProductsOrder: [],
    portoProductsOrder: [],
  },
};

export default (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_SETTINGS_PENDING:
      return { ...state, isFetchingSettings: true };
    case FETCH_SETTINGS_FULFILLED:
      return { ...state, isFetchingSettings: false, ...payload };
    case FETCH_SETTINGS_REJECTED:
      return { ...state, isFetchingSettings: false, error: payload };
    default:
      return state;
  }
};
