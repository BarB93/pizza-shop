import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategorySliceState } from './types'
import { DEFAULT_CATEGORY_ID } from '../../../utils/consts'

const initialState: CategorySliceState = {
  categoryId: DEFAULT_CATEGORY_ID,
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
