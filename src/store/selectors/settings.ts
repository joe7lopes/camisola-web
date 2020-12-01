/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { IProduct, IRootState } from '../../types';
import {
  getBenficaProducts,
  getPortoProducts,
  getSportingProducts,
} from './products';

const settingsState = (state: IRootState) => state.settings;

export const getSettingsSizes = createSelector(
  [settingsState],
  (settings) => settings.sizes,
);

export const getSettingsCategories = createSelector(
  [settingsState],
  (settings) => settings.productCategories,
);

export const getStampingExtraCost = createSelector(
  [settingsState],
  (settings) => settings.stampingExtraCost,
);

export const getShippingCost = createSelector(
  [settingsState],
  () => 5,
);

// home page layout

const getHomePageLayout = createSelector(
  [settingsState],
  (state) => state.homePageLayout,
);

export const getBenficaProductsForHomePage = createSelector(
  [getBenficaProducts, getHomePageLayout],
  (products, homePageLayout) => sortByProductsId(products, homePageLayout.benficaProductsOrder),
);

export const getPortoProductsForHomePage = createSelector(
  [getPortoProducts, getHomePageLayout],
  (products, homePageLayout) => sortByProductsId(products, homePageLayout.portoProductsOrder),
);

export const getSportingProductsForHomePage = createSelector(
  [getSportingProducts, getHomePageLayout],
  (products, homePageLayout) => sortByProductsId(products, homePageLayout.sportingProductsOrder),
);

const sortByProductsId = (products: IProduct[], ids: string[]) => (ids.length > 0 ? products.sort((a, b) => {
  const aIndex = ids.indexOf(a.id);
  const bIndex = ids.indexOf(b.id);
  if (aIndex === -1 || bIndex === -1) return 1;
  return aIndex - bIndex;
}) : products);
