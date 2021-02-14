import { action, createRequestTypes } from '../../../actions';


export const FETCH_FB_REVIEWS = createRequestTypes('FETCH_FB_REVIEWS');

export const fetchFbReviews = () => action(FETCH_FB_REVIEWS.REQUESTED, undefined);
export const fetchFbReviewsPending = () => action(FETCH_FB_REVIEWS.PENDING, undefined);
export const fetchFbReviewsFulfilled = (data: any) => action(FETCH_FB_REVIEWS.FULFILLED, { data });
export const fetchFbReviewsRejected = (error :any) => action(FETCH_FB_REVIEWS.REJECTED, { error });
