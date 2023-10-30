import type { IProductCardItem } from "./components/ProductCard"

export interface IPayloadOptions {
    sort: keyof IProductCardItem
    order: 'asc' | 'desc'
    page: number
    limit: number
}