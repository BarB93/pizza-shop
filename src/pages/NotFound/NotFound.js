import React from 'react'

import styles from './NotFound.module.scss'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>{'Страница не найдена :('}</h1>
      <div><NavLink to='/'>На главную</NavLink></div>
    </div>
  )
}

export default NotFound