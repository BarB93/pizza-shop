import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortId: 6,
  isOpenPopup: false,
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload
    },
    setIsOpenPopup: (state, action) => {
      state.isOpenPopup = action.payload
    },
  },
})

export const { setSortId, setIsOpenPopup } = sortSlice.actions

export default sortSlice.reducer
