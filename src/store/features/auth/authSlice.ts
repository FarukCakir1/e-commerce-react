import { ICard } from '@/types/Card'
import { IUser } from '@/types/User'
import { IProductBasket } from '@/types/components/ProductBasket'
import TokenService from '@/utils/TokenService'
import { apiService } from '@/utils/appAxios'
import {PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export interface authState {
  activeUser: IUser | null
  basket: IProductBasket[]|[]
  totalItem: number
  userCards: Array<Pick<ICard, 'label' | 'key'>>
  userAddresses: any
}

const initialState: authState = {
  activeUser: null,
  basket:[],
  totalItem: 0,
  userCards: [],
  userAddresses: []
}

export const getCards = createAsyncThunk('getCards', async() => {
  const id = TokenService.getToken()
  const response = await apiService.get(`/users/${id}`)
  return response.data.cards.map((card:ICard) => ({label: card.label, key: card.key}))
})
export const getAddress = createAsyncThunk('getAddress', async() => {
  const id = TokenService.getToken()
  const response = await apiService.get(`/users/${id}`)
  return response.data.addresses.map((address:any) => ({label: address.title, key: address.address}))
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action:PayloadAction<IUser>) {
      state.activeUser = action.payload
      state.basket = action.payload.basket
      TokenService.SaveToken(state.activeUser.id)
      
    },
    getTotalItemOnCart(state) {
      state.totalItem = state.basket.length
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, {payload}) => {
      state.userCards = payload
    }),
    builder.addCase(getAddress.fulfilled, (state, {payload}) => {
      state.userAddresses = payload
    })
  }
})

export const { setUser, getTotalItemOnCart } = authSlice.actions
export default authSlice.reducer