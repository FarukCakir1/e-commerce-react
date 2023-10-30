import type { IProductCardItem } from "./ProductCard";

export interface ISliderProps {
    itemsPerPage: number;
    gap: number;
    items: Array<Partial<IProductCardItem[]>>
}