import {
  SAVE_PERSONAL_DATA, SAVE_PERSONAL_DATA_FULFILLED,
} from './actionTypes';

export const savePersonalData = (personalData) => ({
  type: SAVE_PERSONAL_DATA,
  payload: personalData,
});


export const savePersonalDataFulfilled = (savedPersonalData) => ({
  type: SAVE_PERSONAL_DATA_FULFILLED,
  payload: savedPersonalData,
});
