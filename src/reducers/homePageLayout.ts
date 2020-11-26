import {Category, IHomePageLayout} from '../types';

const INITIAL_STATE: IHomePageLayout = {
  benficaProductsOrder: [],
  sportingProductsOrder: [],
  portoProductsOrder: [],
}

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case 'SAVE_HOME_PAGE_LAYOUT':
      if (Category.BENFICA === payload.category) {
        return { ...state, benficaProductsOrder: payload.productIds };
      }
      return state;

    default:
      return state;
  }
};
