import {
    PLACE_ORDER_FULFILLED,
    FETCH_PRODUCTS_REJECTED,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_FULFILLED
} from "../actions";

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, { type, payload }: IProps) => {
    switch (type) {
        case FETCH_PRODUCTS_PENDING:
            return { ...state, isFetchingProducts: true }
        case FETCH_PRODUCTS_FULFILLED:
            return { ...state, isFetchingProducts: false };
        case FETCH_PRODUCTS_REJECTED:
            return { ...state, isFetchingProducts: false, error: payload }
        case PLACE_ORDER_FULFILLED:
            return state;
        default:
            return state;
    }
}
