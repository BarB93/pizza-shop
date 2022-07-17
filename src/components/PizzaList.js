import React from 'react'

import PizzaItem from './PizzaItem'

import pizzas from '../assets/pizzas.json'

const PizzaList = () => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.title} {...pizza} />
        ))}
      </div>
    </>
  )
}

export default PizzaList
