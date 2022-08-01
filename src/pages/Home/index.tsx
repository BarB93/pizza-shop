import React, {FC} from 'react'

import Categories from '../../components/Categories'
import PizzaList from '../../components/PizzaList'
import Sort from '../../components/Sort'

import styles from './Home.module.scss'

const Home:FC = () => {
  return (
    <div className='container'>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </div>
  )
}

export default Home
