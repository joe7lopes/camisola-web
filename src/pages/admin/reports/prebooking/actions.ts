// eslint-disable-next-line import/prefer-default-export
import {action, createRequestTypes} from "../../../../actions";

export const FETCH_PRE_BOOKINGS_REPORT = createRequestTypes('FETCH_PRE_BOOKINGS_REPORT');

export const fetchPreBookingsReport = () => action(FETCH_PRE_BOOKINGS_REPORT.REQUESTED, undefined);
export const fetchPreBookingsReportPending = () => action(FETCH_PRE_BOOKINGS_REPORT.PENDING, undefined);
export const fetchPreBookingsReportFulfilled = (data: any) => action(FETCH_PRE_BOOKINGS_REPORT.FULFILLED, { data });
export const fetchPreBookingsReportRejected = (error :any) => action(FETCH_PRE_BOOKINGS_REPORT.REJECTED, { error });