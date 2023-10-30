import { IUser } from '@/types/User'
import TokenService from '@/utils/TokenService'
import {PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface authState {
  activeUser: IUser | null
}

const initialState: authState = {
  activeUser: null
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action:PayloadAction<IUser>) {
      state.activeUser = action.payload
      TokenService.SaveToken(state.activeUser.id)
    }
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer