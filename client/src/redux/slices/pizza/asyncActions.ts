import { createAsyncThunk } from '@reduxjs/toolkit'
import pizzaAPI from '../../../api/pizzaAPI'
import { PizzaData, PizzasFetchParams } from './types'

export const fetchPizzas = createAsyncThunk<PizzaData, PizzasFetchParams>('pizza/fetchPizzas', async (params) => {
  return await pizzaAPI.fetchPizzas(params)
})
