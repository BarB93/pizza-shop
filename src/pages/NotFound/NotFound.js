import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/UI/Controls/Button'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{'Страница не найдена :('}</h1>
      <p>К сожеления данная страница отсутвует в нашем интернет-магазине</p>
      <Link to="/">
        <Button className={styles.btn} type='black'>На главную</Button>
      </Link>
    </div>
  )
}

export default NotFound
