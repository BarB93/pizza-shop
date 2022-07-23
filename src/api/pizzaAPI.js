import { $host } from './index'

const pizzaAPI = {
  async fetchPizzas(params) {
    const category = params?.category
    const sort = params?.sort
    const search = params?.search

    const { data } = await $host.get('/', {
      params: {
        ...(search ? { title: search } : {}),
        ...(category ? { category: params.category } : {}),
        ...(sort ? { sortBy: params.sort.name, order: params.sort.order } : {}),
      },
    })
    return data
  },
}

export default pizzaAPI
