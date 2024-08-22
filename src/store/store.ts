import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './userSlice'
import cartReducer from './cartSlice'
import catalogReducer from './catalogSlice'
import { goodsApi } from '../services/apiServices/goodsApi'
import { productApi } from '../services/apiServices/productApi'
import { authApi } from '../services/apiServices/authApi'

export const store = configureStore({
  reducer: {
    // user: userReducer,
    cart: cartReducer,
    catalog: catalogReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(goodsApi.middleware)
      .concat(productApi.middleware)
      .concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
