import {
  put, takeLatest,
} from 'redux-saga/effects';

import { FETCH_PRODUCTS, fetchProductsFulfilled } from '../actions';

/*
 * +++Executers+++
 */

function* fetchProducts() {
  const products = [
    {
      id: '1',
      categories: ['benfica'],
      name: 'Camisola slb very long text 2020 bla bla',
      availableSizes: [
        { size: 'S', price: 1 },
        { size: 'M', price: 2 },
        { size: 'L', price: 3 },
        { size: 'XL', price: 4 },
      ],
      defaultPrice: 35,
      isCustomizable: true,
      images: [{
        name: 'img1',
        url: 'https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg',
        isDefault: true,
      }],
    },
  ];

  yield put(fetchProductsFulfilled(products));
}


/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
