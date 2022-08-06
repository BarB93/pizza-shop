import { SortName } from '../sort/types'

export enum Status {
  LOADING = 'loading',
  COMPLITED = 'complited',
  ERROR = 'error',
}

export type Pizza = {
  _id: string
  imageUrl: string
  title: string
  description: string
  types: number[]
  sizes: number[]
  weights: number[]
  prices: number[]
  category: number[]
  price: number
  rating: number
}

export type PizzaData = {
  items: Pizza[]
  count: number
}

export interface PizzaSliceState {
  pizzas: Pizza[]
  status: Status
  totalCountPizzas: number
  currentPage: number
  totalCountPages: number
  limit: number
  isInit: boolean
}

export type PizzasFetchParams = {
  limit: number
  currentPage: number
  category?: number
  sort?: SortName | null
  search?: string
}
