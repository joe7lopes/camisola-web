/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { IRootState } from '../../types';

enum Category {
    benfica = 'benfica',
    porto = 'porto',
    sporting ='sporting'
}

const getProducts = (state: IRootState) => state.products;


export const getBenficaProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.filter(c=> c.name === Category.benfica).length >0),
);

export const getPortoProducts = createSelector(
  [getProducts],
    (products) => products.filter((p) => p.categories.filter(c => c.name === Category.porto).length > 0)
);

export const getSportingProducts = createSelector(
    [getProducts],
    (products) => products.filter((p) => p.categories.filter(c => c.name === Category.sporting).length > 0)
);

//extract from sizes.
export const getProductPrice = (pid:string) => createSelector(
    [getProducts],
    (products) => {
        const product = products.filter(p => p.pid === pid)[0];
        const prices = product.sizes.map(s => s.price);
        return Math.min(...prices)
    }
);

