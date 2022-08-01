import React from 'react'

import { useAppSelector } from '../../hooks'
import CartBottom from '../../components/CartBottom'
import CartEmpty from '../../components/CartEmpty'
import CartList from '../../components/CartList'
import CartTop from '../../components/CartTop'

import styles from './Cart.module.scss'

const Cart = () => {
  const order = useAppSelector(state => state.cart.order)

  return (
    <div className={styles.container}>
      {order.length ? (
        <>
          <CartTop />
          <CartList />
          <CartBottom />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  )
}

export default Cart
