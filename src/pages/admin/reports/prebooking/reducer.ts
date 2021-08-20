import {FETCH_PRE_BOOKINGS_REPORT} from './actions';

export interface IPrebookingReportData {
    productName: string,
    size: string,
    quantity: number
}

export interface IPrebookingReportDataState {
    data: IPrebookingReportData[],
    loading: false,
    error: undefined
}

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: undefined
};

export default function (state = INITIAL_STATE, { type, payload }: any) {
    switch (type){
        case FETCH_PRE_BOOKINGS_REPORT.PENDING:
            return {...state, loading: true}
        case FETCH_PRE_BOOKINGS_REPORT.FULFILLED:
            return {...state, loading: false, data: [...payload.data]}
        case FETCH_PRE_BOOKINGS_REPORT.REJECTED:
            return {...state, loading: false, error: true}
        default:
            return state;
    }
}
