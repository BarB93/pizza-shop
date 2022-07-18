import React, { useEffect, useState } from 'react'

import PizzaItem from './PizzaItem/PizzaItem'
import PizzaItemSkeleton from './PizzaItem/PizzaItemSkeleton'

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://62d45a565112e98e484e62f8.mockapi.io/pizzas')
      .then((data) => data.json())
      .then((pizzas) => {
        setPizzas(pizzas)
        setIsLoading(false)
      })
      .catch((e) => console.error('Error: ' + e.message))
  }, [])

  return (
    <>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? new Array(12).fill(0).map(item =><PizzaItemSkeleton /> ) : pizzas.map((pizza) => <PizzaItem key={pizza.title} {...pizza} />)}</div>
    </>
  )
}

export default PizzaList
