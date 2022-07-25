import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { resetPizzas, setCurrentPage } from '../../redux/slices/pizzaSlice'
import { fetchPizzas } from '../../redux/slices/pizzaSlice/asyncThunks'
import { sortItems } from '../../utils/consts'
import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'

import styles from './PizzaList.module.scss'

const PizzaList = () => {
  const dispatch = useDispatch()
  const { pizzas, isLoading, limit, currentPage, totalCountPages } = useSelector(state => state.pizza)
  const sortId = useSelector(state => state.sort.sortId)
  const categoryId = useSelector(state => state.category.categoryId)
  const search = useSelector(state => state.search.value)
  const lastElement = useRef(null)
 
  useIntersectionObserver({
    ref: lastElement,
    canLoad: currentPage <= totalCountPages,
    isLoading,
    currentPage: currentPage,
    callback: () => {
      dispatch(setCurrentPage(currentPage))
      dispatch(
        fetchPizzas({
          category: categoryId,
          sort: sortItems[sortId]?.value,
          search,
          limit,
          currentPage,
        }),
      )
    },
  })

  useEffect(() => {
    dispatch(resetPizzas())
    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortId, search])

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={`${styles.list} ${pizzas.length > 0 ? styles.notEmpty : ''}`}>
        {pizzas.map(pizza => (
          <PizzaItem key={pizza.title} {...pizza} />
        ))}
        {isLoading && new Array(8).fill(0).map((_, index) => <PizzaItemSkeleton key={index} />)}
        <div className={styles.lastElement} ref={lastElement}></div>
      </div>
    </>
  )
}

export default PizzaList
