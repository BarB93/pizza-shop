import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncActions'
import { PizzaSliceState } from './types'
import { Status } from './types'

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.COMPLITED,

  totalCountPizzas: 26,
  currentPage: 1,
  totalCountPages: Math.ceil(26 / 8),
  limit: 8,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    resetPizzas: state => {
      state.pizzas = []
      state.currentPage = 1
    },
    setCurrentPage: (state, action:PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas.push(...action.payload)
      state.status = Status.COMPLITED
      state.currentPage++
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      // eslint-disable-next-line
      console.error('Произошла ошибка во время запроса за пиццами')
    })
  },
})

export const { resetPizzas, setCurrentPage } = pizzaSlice.actions

export default pizzaSlice.reducer
