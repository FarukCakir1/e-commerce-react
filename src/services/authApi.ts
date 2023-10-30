import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { get } from 'http'
import { url } from 'inspector'


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
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useNewUserMutation,  useGetUserByIdMutation} = authApi