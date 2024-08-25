import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'

export interface IUserState {
  id: number
  name: string
}

const initialState: IUserState = {
  id: 11,
  name: 'Johnson Smith',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
