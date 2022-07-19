import React from 'react'

import Categories from '../../components/Categories'
import PizzaList from '../../components/PizzaList/PizzaList'
import Sort from '../../components/Sort'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </>
  )
}

export default Home