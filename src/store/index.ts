import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import { productApi } from "@/services/productApi";
import { authApi } from "@/services/authApi";
import authSlice from "./features/auth/authSlice";
const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store