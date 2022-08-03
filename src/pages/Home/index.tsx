import React from 'react'

import { Categories, PizzaList, Sort } from '../../components'
import styles from './Home.module.scss'

const Home: React.FC = () => {
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
