import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'

import { setSearch } from '../../redux/slices/searchSlice'

import styles from './Search.module.scss'

const Search = () => {
  const dispatch = useDispatch()
  const searchInput = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const debounceSearch = useDebounce(inputValue)

  const searchChangeHandler = e => {
    setInputValue(e.target.value)
  }

  const clearSearch = () => {
    setInputValue('')
    searchInput.current?.focus && searchInput.current.focus()
  }

  useEffect(() => {
    dispatch(setSearch(debounceSearch))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch])

  return (
    <div className={styles.container}>
      <svg className={styles.searchIcon} enableBackground='new 0 0 32 32' id='EditableLine' version='1.1' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='14' cy='14' fill='none' id='XMLID_42_' r='9' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'></circle>
        <line fill='none' id='XMLID_44_' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2' x1='27' x2='20.366' y1='27' y2='20.366'></line>
      </svg>
      <input ref={searchInput} className={styles.input} type='text' value={inputValue} onChange={searchChangeHandler} placeholder='Поиск пиццы...' />
      {inputValue && (
        <svg className={styles.closeIcon} onClick={() => clearSearch()} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
        </svg>
      )}
    </div>
  )
}

export default Search
