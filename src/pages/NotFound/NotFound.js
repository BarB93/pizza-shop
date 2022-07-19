import React from 'react'
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{'Страница не найдена :('}</h1>
      <p>К сожеления данная страница отсутвует в нашем интернет-магазине</p>
      <button className={styles.btn}><Link to='/'>На главную</Link></button>
    </div>
  )
}

export default NotFound