import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IProduct } from '../types/Product'
import { url } from 'inspector'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getFilteredProducts: builder.query({
      query: (url) => url
    }),
    updateProduct: builder.mutation({
      query: (payload) => {
        return {
          url: `/products/${payload.id}`,
          method: 'PUT',
          body: payload
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetFilteredProductsQuery, useUpdateProductMutation } = productApi