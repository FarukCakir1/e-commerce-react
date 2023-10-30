import { IProduct } from '@/types/Product'
import { IProductCardItem } from '@/types/components/ProductCard'
import {createSlice } from '@reduxjs/toolkit'


export interface productState {
  products: Array<IProduct|IProductCardItem>
}

const initialState: productState = {
  products: []
}


export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    
  },
})


export default productSlice.reducer