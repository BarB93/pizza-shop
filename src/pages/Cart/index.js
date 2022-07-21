import React from 'react'
import { Link } from 'react-router-dom'
import CartBottom from '../../components/CartBottom'
import CartList from '../../components/CartList'
import CartTop from '../../components/CartTop'
import Button from '../../components/UI/Controls/Button'

import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <div className={styles.container}>
        <CartTop />
        <CartList />
        <CartBottom />
    </div>
  )
}

export default Cart
