import type { IProduct } from "../Product";

export interface IProductCardItem extends IProduct {
    order: number
}