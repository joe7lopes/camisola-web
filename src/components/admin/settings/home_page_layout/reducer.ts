import {
    FETCH_SETTINGS
} from '../../../../actions';
import {IHomePageLayout, ISettings} from '../../../../types';

interface IProps {
    type: string,
    payload: {settings:ISettings}
}

const INITIAL_STATE: IHomePageLayout = {
    benficaProductsOrder: [],
    sportingProductsOrder: [],
    portoProductsOrder: [],
};

export default (state = INITIAL_STATE, {type, payload}: IProps) => {
    switch (type) {
        case FETCH_SETTINGS.FULFILLED:
            return {...state,
                benficaProductsOrder:[...payload.settings.homePageLayout.benficaProductsOrder],
                sportingProductsOrder:[...payload.settings.homePageLayout.sportingProductsOrder],
                portoProductsOrder:[...payload.settings.homePageLayout.portoProductsOrder],
            };
        default:
            return state;
    }
};
