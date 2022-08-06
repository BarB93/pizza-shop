import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncActions'
import { PizzaSliceState } from './types'
import { Status } from './types'

export const pizzaTypes: string[] = ['тонкое', 'традиционное']

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.COMPLITED,
  isInit: false,

  totalCountPizzas: 30,
  currentPage: 0,
  totalCountPages: Math.ceil(30 / 8),
  limit: 8,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    resetPizzas: state => {
      state.pizzas = []
      state.currentPage = 0
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
      if(!state.isInit) state.isInit = true

      state.pizzas.push(...action.payload.items)
      state.totalCountPizzas = action.payload.count
      state.totalCountPages = Math.ceil(state.totalCountPizzas / state.limit)
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
