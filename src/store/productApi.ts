import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductDTO, IProduct } from '../models/productModel'
import { baseURL } from '../constants'
import { transformProductDTO } from '../utils/transformProductDTO'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/products/${id}`,
      transformResponse: (response: IProductDTO): IProduct =>
        transformProductDTO(response),
    }),
  }),
})

export const { useGetProductByIdQuery } = productApi
