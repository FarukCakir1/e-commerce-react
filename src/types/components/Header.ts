import type { MenuProps } from "antd";
import { StaticImport } from "next/dist/shared/lib/get-img-props";



export interface ICategory {
    name: string,
    id: number|number,
    routeUrl: string,
    categoryImage?: string ,
    items: MenuProps['items']
}