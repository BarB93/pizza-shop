import { configureStore } from '@reduxjs/toolkit'
import { sortReducer, categoryReducer, pizzaReducer, searchReducer, cartReducer } from './slices'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    category: categoryReducer,
    pizza: pizzaReducer,
    search: searchReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
