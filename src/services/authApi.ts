import TokenService from '@/utils/TokenService'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002" }),
  endpoints: (builder) => ({
    newUser: builder.mutation({
        query: (body) => ({
            url: '/users',
            method: 'POST',
            body
        })
    }),
    getUserById: builder.mutation({
        query: (userId) => ({
            url:`/users/${userId}`,
            method: 'GET',
    })
    }),
    login: builder.mutation({
        query: (urlForFilter) => ({
            url: urlForFilter,
            method: 'GET',
        })
    }),
    addItemToBasket: builder.mutation({
        query: (payload:any) => {
            return {
                url: `/users/${TokenService.getToken()}`,
                method: 'PATCH',
                body: payload
            }
        }
    }),
    deleteItemToBasket: builder.mutation({
        query: (payload) => {
            const id = TokenService.getToken()
            return {
                url: `/users/${id}`,
                method: 'PATCH',
                body: payload
            }
        }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useNewUserMutation,  useGetUserByIdMutation, useLoginMutation, useAddItemToBasketMutation, useDeleteItemToBasketMutation} = authApi