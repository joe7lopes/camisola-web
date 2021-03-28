import _ from 'lodash';
import {FETCH_SETTINGS} from "../../../../../actions";
import {IBadge, ISettings} from "../../../../../types";


interface IProps {
    type: string,
    payload: {settings:ISettings}
}

const INITIAL_STATE: IBadge[] = [];

export default (state = INITIAL_STATE, {type, payload}: IProps) => {
    switch (type) {
        case FETCH_SETTINGS.FULFILLED:
            return _.get(payload, "settings.productSettings.badges", []);
        default:
            return state;
    }
};