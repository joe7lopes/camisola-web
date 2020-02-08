import { PLACE_ORDER_FULFILLED } from "../actions";

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE = {
    orderSummary: {
        order: {}
    }
}
export default (state = INITIAL_STATE, { type, payload }: IProps) => {
    switch (type) {
        case PLACE_ORDER_FULFILLED:
            const updatedorderSummary = {
                ...state.orderSummary,
                order: payload
            }
            return { ...state, orderSummary: updatedorderSummary }
        default:
            return state;
    }
}
