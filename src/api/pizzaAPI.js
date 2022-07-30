import { $host } from './index'

const pizzaAPI = {
  async fetchPizzas(params) {
    const category = params?.category
    const sort = params?.sort
    const search = params?.search
    const limit = params?.limit
    const currentPage = params?.currentPage

    const { data } = await $host.get('/pizzas', {
      params: {
        ...(search ? { title: search } : {}),
        ...(category ? { category: params.category } : {}),
        ...(sort ? { sortBy: params.sort.name, order: params.sort.order } : {}),
        ...(limit ? { limit } : {}),
        ...(currentPage ? { page: currentPage } : {}),
      },
    })
    return data
  },
}

export default pizzaAPI
