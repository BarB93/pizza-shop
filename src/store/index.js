import { configureStore } from '@reduxjs/toolkit'
import { sortReducer, categoryReducer } from './slices'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    category: categoryReducer,
  },
})