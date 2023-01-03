
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes:["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            }),
            providesTags:["Products"]
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/product",
                method: "POST",
                body: data
            }),
            invalidatesTags:["Products"]
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:["Products"]
        })
    }),
    //   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    //   endpoints: (builder) => ({
    //     getPokemonByName: builder.query({
    //       query: (name) => `pokemon/${name}`,
    //     }),
    //   }),
})


export const { useGetProductsQuery,useAddProductMutation ,useRemoveProductMutation} = productApi