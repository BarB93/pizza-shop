import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzas: [],
  isLoading: true,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
})

export const { setPizzas, setIsLoading } = pizzaSlice.actions

export default pizzaSlice.reducer