import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@/services/productApi";
import { authApi } from "@/services/authApi";
import authSlice from "./features/auth/authSlice";
import basketSlice from "./features/basket/basketSlice";
const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice,
        basket: basketSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store