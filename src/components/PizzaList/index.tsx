import React, { useCallback, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { Status } from '../../redux/slices/pizzaSlice/types'
import { resetPizzas } from '../../redux/slices/pizzaSlice'
import { fetchPizzas } from '../../redux/slices/pizzaSlice/asyncThunks'
import { setCategoryId } from '../../redux/slices/categorySlice'
import { setSearch } from '../../redux/slices/searchSlice/searchSlice'
import { setSortId, sortItems } from '../../redux/slices/sortSlice'

import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'

import styles from './PizzaList.module.scss'

const PizzaList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { pizzas, limit, currentPage, totalCountPages, status } = useAppSelector(state => state.pizza)
  const sortId = useAppSelector(state => state.sort.sortId)
  const categoryId = useAppSelector(state => state.category.categoryId)
  const search = useAppSelector(state => state.search.value)
  const [params, setParams] = useSearchParams()
  const isMounted = useRef<boolean>(false)
  // library for IntersectionObserverAPI 
  const { ref: lastElement, inView } = useInView({
    threshold: 0,
  })

  // function for set param to redux state
  const setParamToState = useCallback((name: string, value: string, params: URLSearchParams) => {
    switch (name) {
      case 'category':
        dispatch(setCategoryId(Number(value)))
        break
      case 'title':
        dispatch(setSearch(value))
        break
      case 'sortBy':
        const order = params.get('order')
        const sortIndex: number = sortItems.findIndex(el => (el.value ? el.value.name === value && el.value.order === order : 0))
        dispatch(setSortId(sortIndex))
        break

      default:
        break
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // if there are search params in url, parse and add search params to redux state
  useEffect(() => {
    const search = params.toString()

    if (search) {
      const searchParsed = qs.parse(search.replace(/^\?/, ''))

      for (const key in searchParsed) {
        const value = params.get(key)
        if (value) {
          setParamToState(key, value, params)
        }
      }
    }

    isMounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // infinite loading/scroll, fetch pizzas when lastElement in view and others condition is true
  useEffect(() => {
    if (isMounted.current && inView && currentPage <= totalCountPages) {
      dispatch(
        fetchPizzas({
          category: categoryId,
          sort: sortItems[sortId]?.value,
          search,
          limit,
          currentPage,
        }),
      )
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isMounted, pizzas])

  // set query string in url from state values, ?category={categoryId}&title={search}&sortBy={sortItem.name}&order={sortItem.order}
  useEffect(() => {
    if (isMounted.current) {
      window.scrollTo(0, 0)
      dispatch(resetPizzas())
      const sortItem = sortItems[sortId]?.value

      const queryString = qs.stringify({
        ...(categoryId ? { category: categoryId } : {}),
        ...(search ? { title: search } : {}),
        ...(sortItem && sortItem.name && sortItem.order ? { sortBy: sortItem.name, order: sortItem.order } : {}),
      })

      // if empty then clean query string
      if (queryString) setParams(`?${queryString}`)
      else setParams('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortId, search])

  if (status === Status.ERROR) return <div>Что-то пошло не так</div>

  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={clsx(styles.list, pizzas.length > 0 && styles.notEmpty)}>
        {pizzas.map(pizza => (
          <PizzaItem key={pizza.title} pizza={pizza} />
        ))}
        {status === Status.LOADING && new Array(8).fill(0).map((_, index) => <PizzaItemSkeleton key={index} />)}
        {/* last element for intersection observer */}
        {status === Status.COMPLITED && <div className={styles.lastElement} ref={lastElement}></div>}
      </div>
    </>
  )
}

export default PizzaList
