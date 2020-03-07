import {
  ICartItem,
  IOrder,
  IProduct,
  IAccount,
  ISettings,
} from './index';

export interface IUIState {
    products: {
        isFetchingProducts?: boolean,
    },
    settings: {
        isUpdatingSettings?: boolean,
        isFetchingSettings: boolean
    },
    auth:{
        isSigningUp? :boolean,
        isSigningIn? :boolean,
        isResettingPassword? :boolean,
    }

}

export interface ICartState {
    items: ICartItem[],
    total: number,
    isOrderPlacedLoading: boolean,
    isOrderPlacedSuccess: boolean,
    isOrderPlacedFailure: boolean,
    order?: IOrder
}

export interface IAuthState {
    authToken?: string,
    signUpError?: string,
    signInError?: string,
    resetPasswordError?: string,
}

export interface IRootState {
    account: IAccount,
    products: IProduct[],
    cart: ICartState,
    settings: ISettings,
    ui: IUIState,
    auth: IAuthState
}
