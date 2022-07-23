import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../App'
import pizzaAPI from '../../api/pizzaAPI'
import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'

import styles from './PizzaList.module.scss'
import { sortItems } from '../../utils/consts'

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId, sortId, search } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)

    setIsLoading(true)
    pizzaAPI
      .fetchPizzas({
        category: categoryId,
        sort: sortItems[sortId]?.value,
        search
      })
      .then(pizzas => setPizzas(pizzas))
      .catch(e => console.error('Error: ' + e.message))
      .finally(() => setIsLoading(false))
  }, [categoryId , sortId, search])

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.list}>{isLoading ? new Array(8).fill(0).map((item, index) => <PizzaItemSkeleton key={index} />) : pizzas.map(pizza => <PizzaItem key={pizza.title} {...pizza} />)}</div>
    </>
  )
}

export default PizzaList
