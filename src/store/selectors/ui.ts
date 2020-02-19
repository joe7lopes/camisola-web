/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getUI = (state: IRootState) => state.ui;

export const isFetchingProducts = createSelector(
    [getUI],
    (ui) => ui.isFetchingProducts
);



