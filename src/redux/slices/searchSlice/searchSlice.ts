import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchSliceState } from './types'

const initialState: SearchSliceState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action:PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer
