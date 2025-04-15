
// import {  createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

// // import { logout, setUser } from "../features/auth/authSlice";

// const baseQuery = fetchBaseQuery(
//     { 
//         baseUrl: 'https://batch-3-assignemnt-3.vercel.app/api' ,
//         credentials: 'include',
//         prepareHeaders: (headers,{getState}) =>{
//             const token = (getState()).user.token
//             if(token){
//                 headers.set('authorization',`Bearer ${token}`)
//             }

//             return headers
//         }
//     },
    
//  )

 

// export const baseApi = createApi({
//     reducerPath:'baseApi',
//     baseQuery:baseQuery, 
//     // tagTypes:["Bookings","user"],
//     endpoints: () =>({ })
// })


// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5000/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = baseApi