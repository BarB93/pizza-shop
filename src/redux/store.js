import { configureStore } from '@reduxjs/toolkit'
import { sortReducer, categoryReducer, pizzaReducer, searchReducer } from './slices'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    category: categoryReducer,
    pizza: pizzaReducer,
    search: searchReducer,
  },
})