export enum SortName {
  RATING_ASC = 'rating',
  RATING_DESC = '-rating',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
  TITLE_ASC = 'title',
  TITLE_DESC = '-title',
}
export interface SortSliceState {
  sortId: number
  isOpenPopup: boolean
}

export type SortItem = {
  value: SortName | null
  label: string
}
