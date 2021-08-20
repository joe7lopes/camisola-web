import {combineReducers} from "redux";
import prebooking, {IPrebookingReportDataState} from './prebooking/reducer';

export interface IAdminReportsState {
    prebooking: IPrebookingReportDataState
}

export default combineReducers({
    prebooking
});
