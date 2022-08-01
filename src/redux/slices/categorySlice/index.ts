import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategorySliceState } from './types'

const initialState: CategorySliceState = {
  categoryId: 0,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = categorySlice.actions

export default categorySlice.reducer
