import { createAsyncThunk } from '@reduxjs/toolkit'
import pizzaAPI from './../../../api/pizzaAPI'
import { Pizza, PizzasFetchParams } from './types'

export const fetchPizzas = createAsyncThunk<Pizza[], PizzasFetchParams>('pizza/fetchPizzas', async (params) => {
  return await pizzaAPI.fetchPizzas(params)
})
