import { Pizza, PizzasFetchParams } from '../redux/slices/pizza/types'
import { $host } from './index'

const pizzaAPI = {
  async fetchPizzas(params: PizzasFetchParams) {
    const category = params?.category
    const sort = params?.sort
    const search = params?.search
    const limit = params?.limit
    const currentPage = params?.currentPage

    const { data } = await $host.get<Pizza[]>('/pizzas', {
      params: {
        ...(search ? { title: search } : {}),
        ...(category ? { category: params.category } : {}),
        ...(sort?.name && sort?.order ? { sortBy: sort.name, order: sort.order } : {}),
        ...(limit ? { limit } : {}),
        ...(currentPage ? { page: currentPage } : {}),
      },
    })
    return data as Pizza[]
  },
}

export default pizzaAPI
