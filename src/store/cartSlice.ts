import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { ICart } from '../models/cartModel'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCartByID } from '../services/apiServices/cartApiService'

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

export interface CartState {
  cart: ICart | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CartState = {
  cart: null,
  loading: 'idle',
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
  },
})

export default cartSlice.reducer
