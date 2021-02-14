import { FETCH_FB_REVIEWS } from './actions';
import { IFacebookReviews } from '../../../types';

const INITIAL_STATE: IFacebookReviews = {
  loading: false,
  reviews: [],
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_FB_REVIEWS.PENDING:
      return { ...state, loading: true };
    case FETCH_FB_REVIEWS.FULFILLED:
      return { ...state, loading: false, reviews: payload.data };
    case FETCH_FB_REVIEWS.REJECTED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
