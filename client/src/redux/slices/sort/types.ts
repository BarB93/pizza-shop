export enum SortName {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export enum SortOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export interface SortSliceState {
  sortId: number
  isOpenPopup: boolean
}

export type SortItemValue = {
  name: SortName
  order: SortOrder
} | null

export type SortItem = {
  value: SortItemValue
  label: string
}
