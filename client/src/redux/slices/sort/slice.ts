import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortItem, SortName, SortSliceState } from './types'
import { DEFAULT_SORT_ID } from './../../../utils/consts'

export const sortItems: SortItem[] = [
  { value: SortName.RATING_DESC, label: 'популярности max' },
  { value: SortName.RATING_ASC, label: 'популярности min' },
  { value: SortName.PRICE_DESC, label: 'цене max' },
  { value: SortName.PRICE_ASC, label: 'цене min' },
  { value: SortName.TITLE_ASC, label: 'алфавиту А-Я' },
  { value: SortName.TITLE_DESC, label: 'алфавиту Я-А' },
]

const initialState: SortSliceState = {
  sortId: DEFAULT_SORT_ID,
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
