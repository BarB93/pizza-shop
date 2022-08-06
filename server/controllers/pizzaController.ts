import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import PizzaModel from '../models/Pizza'

export const addPizza = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }

  try {
    const doc = new PizzaModel({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      prices: req.body.prices,
      imageURL: req.body.imageURL,
      rating: req.body.rating,
      sizes: req.body.sizes,
      types: req.body.types,
      weights: req.body.weights,
    })

    await doc.save()

    res.json({
      succsess: true,
      item: doc.toObject(),
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error in pizzaController',
      error,
    })
  }
}

export const getPizzas = async (req: Request, res: Response) => {
  const { limit, page, search, category, sort } = req.query
  console.log('limit', limit)
  console.log('page', page)

  try {
    // const count = await PizzaModel.count()
    // const items = await PizzaModel.find()
    let count: number = 3
    let items

    res.json({
      items,
      count,
    })
  } catch (error) {}
}
