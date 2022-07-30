import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: [],
  totalCount: 0,
  totalPrice: 0,
  totalWeight: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const addPizza = action.payload
      // check there are already pizza in cart with same id, size and type
      const index = state.order.findIndex(item => item.id === addPizza.id && item.sizeIndex === addPizza.sizeIndex && item.typeIndex === addPizza.typeIndex)
      if (index === -1) {
        state.order.push({ ...addPizza, quantity: 1 })
      } else {
        state.order[index].quantity++
      }
      calculationOrderValues(state)
    },
    removeFromOrder: (state, action) => {
      const index = state.order.findIndex(item => item.id === action.payload.id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order.splice(index, 1)
      calculationOrderValues(state)
    },
    clearOrder: state => {
      state.order = []
      state.totalCount = 0
      state.totalPrice = 0
      state.totalWeight = 0
    },
    increment: (state, action) => {
      const index = state.order.findIndex(item => item.id === action.payload.id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order[index].quantity++
      calculationOrderValues(state)
    },
    decrement: (state, action) => {
      const index = state.order.findIndex(item => item.id === action.payload.id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order[index].quantity > 1 && state.order[index].quantity--
      calculationOrderValues(state)
    },
  },
})

// func for calculate totalCount, totalPrice and totalWeight when order changed
function calculationOrderValues(state) {
  let totalCount = 0
  let totalPrice = 0
  let totalWeight = 0
  for (let i = 0; i < state.order.length; i++) {
    const item = state.order[i]
    totalCount += item.quantity
    totalPrice += item.prices[item.sizeIndex] * item.quantity
    totalWeight += item.weights[item.sizeIndex] * item.quantity
  }

  state.totalCount = totalCount
  state.totalPrice = totalPrice
  state.totalWeight = totalWeight
}

export const { addToOrder, removeFromOrder, clearOrder, increment, decrement } = cartSlice.actions

export default cartSlice.reducer
