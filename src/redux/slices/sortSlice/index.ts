import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortItem, SortName, SortOrder, SortSliceState } from './types'

export const sortItems: SortItem[] = [
  { value: { name: SortName.RATING, order: SortOrder.DESC }, label: 'популярности max' },
  { value: { name: SortName.RATING, order: SortOrder.ASC }, label: 'популярности min' },
  { value: { name: SortName.PRICE, order: SortOrder.DESC }, label: 'цене max' },
  { value: { name: SortName.PRICE, order: SortOrder.ASC }, label: 'цене min' },
  { value: { name: SortName.TITLE, order: SortOrder.ASC }, label: 'алфавиту А-Я' },
  { value: { name: SortName.TITLE, order: SortOrder.DESC }, label: 'алфавиту Я-А' },
  { value: null, label: 'без сортировки' },
]

const initialState: SortSliceState = {
  sortId: 6,
  isOpenPopup: false,
}
export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortId: (state, action: PayloadAction<number>) => {
      state.sortId = action.payload
    },
    setIsOpenPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenPopup = action.payload
    },
  },
})

export const { setSortId, setIsOpenPopup } = sortSlice.actions

export default sortSlice.reducer
