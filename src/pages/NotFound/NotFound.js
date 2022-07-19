import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{'Страница не найдена :('}</h1>
      <button className={styles.btn}><NavLink to='/'>На главную</NavLink></button>
    </div>
  )
}

export default NotFound