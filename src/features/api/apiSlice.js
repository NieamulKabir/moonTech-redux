
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            })
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/product",
                method: "POST",
                body: data
            })
        })
    }),
    //   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    //   endpoints: (builder) => ({
    //     getPokemonByName: builder.query({
    //       query: (name) => `pokemon/${name}`,
    //     }),
    //   }),
})


export const { useGetProductsQuery,useAddProductMutation } = productApi