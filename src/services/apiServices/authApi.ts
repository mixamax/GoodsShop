import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../constants'
import { IAuthResponse, IBodyRequest } from '../../models/authModel'
import { IUserDTO, IUser } from '../../models/userModel'
import { transformUserDTO } from '../../utils/transformUserDTO'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getToken: builder.query<IAuthResponse, IBodyRequest>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    getCurrentUser: builder.query<IUser, string>({
      query: (token) => ({
        url: 'auth/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: IUserDTO) => transformUserDTO(response),
    }),
  }),
})

export const { useGetTokenQuery, useGetCurrentUserQuery } = authApi
