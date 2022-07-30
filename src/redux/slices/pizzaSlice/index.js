import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncThunks'

const initialState = {
  pizzas: [],
  isLoading: false,

  totalCountPizzas: 26,
  currentPage: 1,
  totalCountPages: Math.ceil(26 / 8),
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
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, (state, action,) => {
      state.isLoading = true
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas.push(...action.payload)
      state.isLoading = false
      state.currentPage++
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      // eslint-disable-next-line
      console.error('Произошла ошибка во время запроса за пиццами')
    })
  },
})

export const { resetPizzas, setCurrentPage } = pizzaSlice.actions

export default pizzaSlice.reducer
