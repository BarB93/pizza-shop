import React, { useCallback, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { Status } from '../../redux/slices/pizza/types'
import { resetPizzas } from '../../redux/slices/pizza/slice'
import { fetchPizzas } from '../../redux/slices/pizza/asyncActions'
import { setCategoryId } from '../../redux/slices/category/slice'
import { setSearch } from '../../redux/slices/search/slice'
import { setSortId, sortItems } from '../../redux/slices/sort/slice'

import { DEFAULT_SORT_ID } from './../../utils/consts'
import PizzaItem from '../PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import PizzaEmpty from '../PizzaEmpty/PizzaEmpty'

import styles from './PizzaList.module.scss'

const PizzaList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { pizzas, limit, currentPage, totalCountPages, status, isInit } = useAppSelector(state => state.pizza)
  const sortId = useAppSelector(state => state.sort.sortId)
  const categoryId = useAppSelector(state => state.category.categoryId)
  const search = useAppSelector(state => state.search.value)
  const [params, setParams] = useSearchParams()
  const isMounted = useRef<boolean>(false)
  const searchRef = useRef(search)
  const categoryRef = useRef(categoryId)
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
      case 'sort':
        const sortIndex: number = sortItems.findIndex(el => (el.value ? el.value === value : DEFAULT_SORT_ID))
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

    searchRef.current = search
    categoryRef.current = categoryId

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
        ...(sortItem ? { sort: sortItem } : {}),
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
        {/* TODO barb: когда сделаю сервер, проверку дулать по возвражаемым данным с сервера, а имменно кол-во пицц */}
        {pizzas.length === 0 && status === Status.COMPLITED && isInit && <PizzaEmpty />}
      </div>
    </>
  )
}

export default PizzaList
