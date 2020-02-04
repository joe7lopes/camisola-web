import { PLACE_ORDER_FULFILLED } from "../actions";

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE = {
    orderReceived: {
        visible: false,
    }
}
export default (state = INITIAL_STATE, { type, payload }: IProps) => {
    switch (type) {
        case PLACE_ORDER_FULFILLED:
            const updatedOrderReceived = {
                ...state.orderReceived,
                visible: true,
                order: payload
            }
            return { ...state, orderReceived: updatedOrderReceived }
        default:
            return state;
    }
}
