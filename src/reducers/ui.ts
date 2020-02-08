import { PLACE_ORDER_FULFILLED } from "../actions";

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE = {
    
}
export default (state = INITIAL_STATE, { type, payload }: IProps) => {
    switch (type) {
        case PLACE_ORDER_FULFILLED:
            return state;
        default:
            return state;
    }
}
