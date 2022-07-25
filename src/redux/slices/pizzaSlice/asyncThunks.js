import { createAsyncThunk } from '@reduxjs/toolkit'
import pizzaAPI from './../../../api/pizzaAPI'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params, thunkAPI) => {
    return await pizzaAPI.fetchPizzas(params)
  }
)