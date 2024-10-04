import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResponseProductsDTO } from '../../models/productModel'
import { baseURL } from '../../constants'

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getGoodsByTitle: builder.query<
      IResponseProductsDTO,
      { title: string; limit: number }
    >({
      query: ({ title, limit }) => ({
        url: `/products/search?q=${title}&limit=${limit}&skip=${0}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
    }),
  }),
})

export const { useGetGoodsByTitleQuery } = goodsApi
