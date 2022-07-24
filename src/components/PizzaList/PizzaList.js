import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setIsLoading, setPizzas } from '../../redux/slices/pizzaSlice'
import { sortItems } from '../../utils/consts'
import pizzaAPI from '../../api/pizzaAPI'
import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'

import styles from './PizzaList.module.scss'

const PizzaList = () => {
  const dispatch = useDispatch()
  const { pizzas, isLoading } = useSelector(state => state.pizza)
  const sortId = useSelector(state => state.sort.sortId)
  const categoryId = useSelector(state => state.category.categoryId)
  const search = useSelector(state => state.search.value)

  useEffect(() => {
    window.scrollTo(0, 0)

    dispatch(setIsLoading(true))
    pizzaAPI
      .fetchPizzas({
        category: categoryId,
        sort: sortItems[sortId]?.value,
        search,
      })
      .then(pizzas => dispatch(setPizzas(pizzas)))
      .catch(e => console.error('Error: ' + e.message))
      .finally(() => dispatch(setIsLoading(false)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortId, search])

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.list}>{isLoading ? new Array(8).fill(0).map((_, index) => <PizzaItemSkeleton key={index} />) : pizzas.map(pizza => <PizzaItem key={pizza.title} {...pizza} />)}</div>
    </>
  )
}

export default PizzaList
