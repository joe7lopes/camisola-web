import { ICartItem, IOrder, IProduct, IAccount } from './index';

export interface ICartState {
    items: ICartItem[]
    total: number,
    isOrderPlacedLoading: boolean,
    isOrderPlacedSuccess: boolean,
    isOrderPlacedFailure: boolean,
    order?: IOrder
}

export interface IRootState {
    account: IAccount,
    products: IProduct[],
    cart: ICartState,
    ui: IUIState
}

export interface IUIState {
    orderSummary: {
        visible: boolean,
        order: IOrder
    }
    isFetchingProducts?: boolean
}