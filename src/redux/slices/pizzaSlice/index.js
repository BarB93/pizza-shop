import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncThunks'

const initialState = {
  pizzas: [],
  isLoading: false,

  totalCountPizzas: 22,
  currentPage: 1,
  totalCountPages: Math.ceil(22 / 8),
  limit: 8,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    resetPizzas: (state, action) => { 
      state.pizzas = []
      state.currentPage = 1
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas.push(...action.payload)
      state.isLoading = false
      state.currentPage++
    })
  }
})

export const { resetPizzas, setCurrentPage } = pizzaSlice.actions

export default pizzaSlice.reducer
