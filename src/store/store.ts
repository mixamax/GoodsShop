import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import catalogReducer from './catalogSlice'
import { goodsApi } from './goodsApi'
import { productApi } from './productApi'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    catalog: catalogReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(goodsApi.middleware)
      .concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
