import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsOpenPopup, setSortId, sortItems } from '../../redux/slices/sort/slice'

import styles from './Sort.module.scss'

const Sort: React.FC = () => {
  const { sortId, isOpenPopup } = useAppSelector(state => state.sort)
  const dispatch = useAppDispatch()
  const sortRef = useRef<HTMLDivElement>(null)

  const selectSortItem = (index: number) => {
    dispatch(setSortId(index))
    dispatch(setIsOpenPopup(false))
  }

  const closePopup = () => {
    dispatch(setIsOpenPopup(false))
  }

  const togglePopup = () => {
    dispatch(setIsOpenPopup(!isOpenPopup))
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[]
      }
      if (sortRef.current && !_event.path.includes(sortRef.current) && isOpenPopup) {
        closePopup()
      }
    }
    window.addEventListener('click', handler)

    return () => window.removeEventListener('click', handler)
    // eslint-disable-next-line
  }, [isOpenPopup])

  return (
    <div ref={sortRef} className={clsx(styles.sort, isOpenPopup && styles.open)}>
      <div className={styles.label}>
        <svg className={styles.icon} width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => togglePopup()}>{sortItems[sortId].label}</span>
      </div>
      <div className={styles.popup}>
        <ul>
          {sortItems.map((item, index) => (
            <li key={item.label} className={clsx(sortId === index && styles.active)} onClick={() => selectSortItem(index)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sort
