import { ICart, IRequestChangeProductQuantity } from '../models/cartModel'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getCartByID,
  updateCartByID,
} from '../services/apiServices/cartApiService'

export const fetchCartById = createAsyncThunk(
  'cart/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await getCartByID(userId)
    if ('errorMessage' in response) {
      return thunkAPI.rejectWithValue(response)
    }
    return response
  }
)

export const updateCart = createAsyncThunk(
  'cart/updateCartStatus',
  async (
    cartData: { cartId: number; data: IRequestChangeProductQuantity[] },
    thunkAPI
  ) => {
    const response = await updateCartByID(cartData.cartId, cartData.data)
    if ('errorMessage' in response) {
      return thunkAPI.rejectWithValue(response)
    }
    return response
  }
)

export interface CartState {
  cart: ICart | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  isUpdateLoading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CartState = {
  cart: null,
  loading: 'idle',
  isUpdateLoading: 'idle',
} satisfies CartState as CartState

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartById.fulfilled, (state, action) => {
        state.cart = action.payload.cart
        state.loading = 'succeeded'
      })
      .addCase(fetchCartById.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchCartById.rejected, (state) => {
        state.loading = 'failed'
        state.cart = null
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart
        state.isUpdateLoading = 'succeeded'
      })
      .addCase(updateCart.pending, (state) => {
        state.isUpdateLoading = 'pending'
      })
      .addCase(updateCart.rejected, (state) => {
        state.isUpdateLoading = 'failed'
      })
  },
})

export default cartSlice.reducer
