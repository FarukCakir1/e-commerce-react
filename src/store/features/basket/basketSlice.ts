import { IProductBasket } from '@/types/components/ProductBasket'
import TokenService from '@/utils/TokenService'
import { apiService } from '@/utils/appAxios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export interface basketState {
  basket: IProductBasket[]|[]
  totalItem: number,
  totalPrice: number
}

const initialState: basketState = {
  basket:[],
  totalItem: 0,
  totalPrice: 0
}

export const getBasket = createAsyncThunk('getBasketThunk', async(payload) => {
  const id = TokenService.getToken()
  const response = await apiService.get(`/users/${id}`)
  return await response.data
})

export const addItemToBasket = createAsyncThunk('addItemToBasket', async(payload) => {
  const id = TokenService.getToken()
  const response = await apiService.patch(`/users/${id}`, {basket: payload})
  return await response.data
})

export const deleteItem = createAsyncThunk('deleteItem', async(payload) => {
  const id = TokenService.getToken()
  const response = await apiService.patch(`/users/${id}`, {basket: payload})
  return response.data
})

export const increaseItemAmount = createAsyncThunk('increaseItemAmount', async(payload:IProductBasket) => {
  const id = TokenService.getToken()
  const response = await apiService.get(`/users/${id}`)
  const basket = response.data.basket;
  const index = basket.findIndex((listItem:IProductBasket) => listItem.id === payload.id)
  basket[index].amount = basket[index].amount + 1
  const newRes = await apiService.patch(`/users/${id}`, {basket})
  console.log(newRes.data);
  return await newRes.data
})

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, {payload}) => {
      state.basket = payload.basket
      state.totalPrice = state.basket.reduce(
        (pre: any, curr: IProductBasket) => pre + curr.price * curr.amount,
        0
      )
    }),
    builder.addCase(addItemToBasket.fulfilled, (state, {payload}) => {
      state.basket = payload.basket
      state.totalItem = payload.basket.length
    }),
    builder.addCase(increaseItemAmount.fulfilled, (state, {payload}) => {
      state.basket = payload.basket
    })
    builder.addCase(deleteItem.fulfilled, (state, {payload}) => {
      state.basket = payload.basket
      state.totalItem = payload.basket.length
    })
  }
})
export default basketSlice.reducer