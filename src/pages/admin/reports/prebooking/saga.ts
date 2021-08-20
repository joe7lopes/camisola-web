// eslint-disable-next-line import/prefer-default-export
import {call, put, takeLatest} from "redux-saga/effects";
import {
    FETCH_PRE_BOOKINGS_REPORT,
    fetchPreBookingsReportPending,
    fetchPreBookingsReportRejected,
    fetchPreBookingsReportFulfilled
} from "./actions";
import api from "../../../../sagas/api";


function* fetchPreBookingsReportExec() {
    yield put(fetchPreBookingsReportPending());
    try {
        const {data} = yield call(api.get, '/api/orders/reports/prebooking');
        yield put(fetchPreBookingsReportFulfilled(data));
    } catch (err) {
        yield put(fetchPreBookingsReportRejected(err));
    }
}


export function* watchFetchPreBookingsReport() {
    yield takeLatest(FETCH_PRE_BOOKINGS_REPORT.REQUESTED, fetchPreBookingsReportExec);
}
