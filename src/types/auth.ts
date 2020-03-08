export enum IUserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface IUser {
    firstName: string
    lastName: string
    email: string
    phone: string,
    role: IUserRole,
}
