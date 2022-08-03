import React from 'react'

import { setSearch } from '../../redux/slices/search/slice'
import { setCategoryId } from '../../redux/slices/category/slice'
import { useAppDispatch } from './../../hooks'
import Button from '../UI/Controls/Button'

import dishEmpty from '../../assets/img/dish-empty.svg'
import styles from './PizzaEmpty.module.scss'
import { setSortId } from '../../redux/slices/sort/slice'
import { DEFAULT_CATEGORY_ID, DEFAULT_SORT_ID } from '../../utils/consts'

const PizzaEmpty: React.FC = () => {
  const dispatch = useAppDispatch()

  const resetFilters = () => {
    dispatch(setSearch(''))
    dispatch(setCategoryId(0))
    dispatch(setSortId(DEFAULT_SORT_ID))
    dispatch(setCategoryId(DEFAULT_CATEGORY_ID))
  }

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={dishEmpty} alt='Пицц не найдено' />
      <h4>По вашим запросам не найдено ни одной пиццы</h4>
      <div className={styles.btn}>
        <Button onClick={resetFilters} type='black'>
          Сбросить все фильтры
        </Button>
      </div>
    </div>
  )
}

export default PizzaEmpty
