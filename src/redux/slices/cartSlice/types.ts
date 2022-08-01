import { Pizza } from "../pizzaSlice/types"

export type OrderItem = Pizza & {
  typeIndex: number
  sizeIndex: number
  quantity: number
}

export type CartItemType = {
  id: number
  sizeIndex: number
  typeIndex: number
}

export interface CartSliceState {
  order: OrderItem[]
  totalCount: number
  totalPrice: number
  totalWeight: number
}