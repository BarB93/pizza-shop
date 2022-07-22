import { $host } from './index'

const pizzaAPI = {
  async fetchPizzas(params) {
    const { data } = await $host.get('/', {
      params: {
        ...(params?.category ? { category: params.category } : {}),
        ...(params?.sort ? { sortBy: params.sort.value, orderBy: params.sort.type } : {}),
      },
    })
    return data
  },
}

export default pizzaAPI
