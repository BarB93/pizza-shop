import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, CartSliceState, OrderItem } from './types'
import { ORDER_NAME_IN_LOCAL_STORAGE } from '../../../utils/consts'

const initialState: CartSliceState = {
  order: [],
  totalCount: 0,
  totalPrice: 0,
  totalWeight: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderItem[]>) => {
      state.order = action.payload
      calculationOrderValues(state)
    },
    addToOrder: (state, action: PayloadAction<OrderItem>) => {
      const addPizza = action.payload
      // check there are already pizza in cart with same id, size and type
      const index = state.order.findIndex(item => item._id === addPizza._id && item.sizeIndex === addPizza.sizeIndex && item.typeIndex === addPizza.typeIndex)
      if (index === -1) {
        state.order.push({ ...addPizza, quantity: 1 })
      } else {
        state.order[index].quantity++
      }
      calculationOrderValues(state)
      saveOrderToLocalStorage(state.order)
    },
    removeFromOrder: (state, action: PayloadAction<CartItemType>) => {
      const index = state.order.findIndex(item => item._id === action.payload._id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order.splice(index, 1)
      calculationOrderValues(state)
      saveOrderToLocalStorage(state.order)
    },
    clearOrder: state => {
      state.order = []
      state.totalCount = 0
      state.totalPrice = 0
      state.totalWeight = 0
      saveOrderToLocalStorage(state.order)
    },
    increment: (state, action: PayloadAction<CartItemType>) => {
      const index = state.order.findIndex(item => item._id === action.payload._id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order[index].quantity++
      calculationOrderValues(state)
      saveOrderToLocalStorage(state.order)
    },
    decrement: (state, action: PayloadAction<CartItemType>) => {
      const index = state.order.findIndex(item => item._id === action.payload._id && item.typeIndex === action.payload.typeIndex && item.sizeIndex === action.payload.sizeIndex)
      state.order[index].quantity > 1 && state.order[index].quantity--
      calculationOrderValues(state)
      saveOrderToLocalStorage(state.order)
    },
  },
})

// func for calculate totalCount, totalPrice and totalWeight when order changed
function calculationOrderValues(state: CartSliceState) {
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

function saveOrderToLocalStorage(value: OrderItem[]) {
  if (typeof window !== 'undefined') {
    const str = JSON.stringify(value)
    window.localStorage.setItem(ORDER_NAME_IN_LOCAL_STORAGE, str)
  }
}

export const { setOrder, addToOrder, removeFromOrder, clearOrder, increment, decrement } = cartSlice.actions

export default cartSlice.reducer
