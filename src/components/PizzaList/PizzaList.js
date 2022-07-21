import React, { useEffect, useState } from 'react'

import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'

import styles from './PizzaList.module.scss'

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://62d45a565112e98e484e62f8.mockapi.io/pizzas')
      .then(data => data.json())
      .then(pizzas => {
        setPizzas(pizzas)
        setIsLoading(false)
      })
      .catch(e => console.error('Error: ' + e.message))

    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.list}>{isLoading ? new Array(8).fill(0).map((item, index) => <PizzaItemSkeleton key={index} />) : pizzas.map(pizza => <PizzaItem key={pizza.title} {...pizza} />)}</div>
    </>
  )
}

export default PizzaList
