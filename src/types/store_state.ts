import {
  IAccount, ICartItem, IImage, IProduct, ISettings,
} from './index';
import { IUser } from './auth';

export interface IRequest {
    loading: boolean,
    data?: any,
    error?: any
}

export interface IAdminOrders extends IRequest{}

export interface IUIState {
    products: {
        isFetchingProducts?: boolean,
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
        isUpdatingProduct: boolean,
        isProductUpdated: boolean,
        error?: string
    },
    imageManager:IRequest
}

export interface ICartState {
    items: ICartItem[],
    total: number,
    submittedOrder: IRequest,
}

export interface IAuthState {
    token?: string,
    signUpError?: string,
    signInError?: string,
    resetPasswordError?: string,
    user?: IUser
}

export interface IAdminState {
    images: IImage[]
}

export interface IHomePageLayout {
    benficaProductsOrder: string[],
    sportingProductsOrder: string[],
    portoProductsOrder: string[]
}

export interface IRootState {
    account: IAccount,
    products: IProduct[],
    cart: ICartState,
    settings: ISettings,
    ui: IUIState,
    auth: IAuthState,
    admin: IAdminState,
    adminOrders: IAdminOrders,
    adminProduct: IRequest,
    homePageLayout: IHomePageLayout,
}
