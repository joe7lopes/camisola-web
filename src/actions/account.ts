import {
  SAVE_PERSONAL_DATA, SAVE_PERSONAL_DATA_FULFILLED,
} from './actionTypes';
import { IUserData } from '../types';

export const savePersonalData = (personalData:IUserData) => ({
  type: SAVE_PERSONAL_DATA,
  payload: personalData,
});

//todo type
export const savePersonalDataFulfilled = () => ({
  type: SAVE_PERSONAL_DATA_FULFILLED,
});
