import React from 'react'
import { Link } from 'react-router-dom'

import cartEmpty from '../../assets/img/cart-empty.svg'
import Button from '../UI/Controls/Button'
import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <img src={cartEmpty} alt='Корзина пуста' />
      <p className={styles.text}>В корзине ничего нет!</p>
      <Link to='/'>
        <Button type='black'>Перейти к пиццам</Button>
      </Link>
    </div>
  )
}

export default CartEmpty
