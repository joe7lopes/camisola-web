import {
  IAccount, ICartItem, IProduct, ISettings,
} from './index';
import { IUser } from './auth';

export interface IUIState {
    products: {
        isFetchingProducts?: boolean,
        isSavingNewProduct: boolean
    },
    settings: {
        isUpdatingSettings?: boolean,
        isFetchingSettings: boolean
    },
    auth: {
        isSigningUp?: boolean,
        isSigningIn?: boolean,
        isResettingPassword?: boolean,
        isSignInSuccess: boolean
    },
    admin: {
        isFetchingOrders?: boolean,
    }
}

export interface ICartState {
    items: ICartItem[],
    total: number,
    isOrderPlacedLoading: boolean,
    isOrderPlacedSuccess: boolean,
    isOrderPlacedFailure: boolean,
    orderId?: string
}

export interface IAuthState {
    token?: string,
    signUpError?: string,
    signInError?: string,
    resetPasswordError?: string,
    user?: IUser
}

export interface IAdminState {
    orders: []
}

export interface IRootState {
    account: IAccount,
    products: IProduct[],
    cart: ICartState,
    settings: ISettings,
    ui: IUIState,
    auth: IAuthState,
    admin: IAdminState
}
