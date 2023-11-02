import type { IProductBasket } from "./components/ProductBasket"

export interface IUser {
    id: string
    name: string,
    surname: string,
    username: string,
    password: string,
    birthDate: string | Date,
    role: 'ADMIN' | 'USER',
    basket: Array<IProductBasket> | []
}