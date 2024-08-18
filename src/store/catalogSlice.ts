import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { goodsPerPage } from '../constants'

export interface ICatalogState {
  limit: number
  searchValue: string
}

const initialState: ICatalogState = {
  limit: goodsPerPage,
  searchValue: '',
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      if (state.searchValue === action.payload) return
      state.searchValue = action.payload
      state.limit = goodsPerPage
    },
    incrementLimit(state) {
      state.limit += goodsPerPage
    },
  },
})

export const { incrementLimit, setSearchValue } = catalogSlice.actions
export default catalogSlice.reducer
