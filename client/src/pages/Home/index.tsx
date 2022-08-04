import React from 'react'

import { Categories, PizzaList, Search, Sort } from '../../components'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.search}>
        <Search />
      </div>
      <div className='container'>
        <div className={styles.top}>
          <Categories />
          <Sort />
        </div>
        <PizzaList />
      </div>
    </>
  )
}

export default Home
