import { Pizza } from "../pizza/types"

export type OrderItem = Pizza & {
  typeIndex: number
  sizeIndex: number
  quantity: number
}

export type CartItemType = {
  _id: string
  sizeIndex: number
  typeIndex: number
}

export interface CartSliceState {
  order: OrderItem[]
  totalCount: number
  totalPrice: number
  totalWeight: number
}