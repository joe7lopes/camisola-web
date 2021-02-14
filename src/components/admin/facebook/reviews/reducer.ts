import { FETCH_FB_REVIEWS } from '../../../home/facebook/actions';

const INITIAL_STATE = {
  data: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_FB_REVIEWS.FULFILLED:
      if (payload.data === undefined || payload.data.length <= 0) {
        return {
          ...state,
          error: 'Facebook reviews nao estao a funcionar.'
                        + '\n Faz login do facebook outra vez para ter nova autorizacao',
        };
      }
      return state;
    case FETCH_FB_REVIEWS.REJECTED:
      return { ...state, error: 'Erro ao obter facebook reviews.' };
    default:
      return state;
  }
};
