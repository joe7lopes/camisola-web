export enum IUserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface IUserAddress {
    street?:string
    city?: string,
    postalCode?: string
}

export interface IUser {
    firstName?: string
    lastName?: string
    address?: IUserAddress,
    email: string
    phone: string,
    role: IUserRole,
}
