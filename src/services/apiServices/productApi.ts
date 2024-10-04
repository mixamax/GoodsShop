import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductDTO, IProduct } from '../../models/productModel'
import { baseURL } from '../../constants'
import { transformProductDTO } from '../../utils/transformProductDTO'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getProductById: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }),
      transformResponse: (response: IProductDTO): IProduct =>
        transformProductDTO(response),
    }),
  }),
})

export const { useGetProductByIdQuery } = productApi
