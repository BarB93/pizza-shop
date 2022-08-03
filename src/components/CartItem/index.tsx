import React from 'react'

import { decrement, increment, removeFromOrder } from '../../redux/slices/cart/slice'
import { pizzaTypes } from '../../redux/slices/pizza/slice'
import pricePrettify from './../../utils/pricePrettify'
import { OrderItem } from '../../redux/slices/cart/types'
import { useAppDispatch } from '../../hooks'
import CircleControl from '../UI/Controls/CircleControl'

import styles from './CartItem.module.scss'

const CartItem: React.FC<OrderItem> = ({ id, title, typeIndex, sizes, sizeIndex, prices, quantity, weights }) => {
  const dispatch = useAppDispatch()
  const cartItem = { id, sizeIndex, typeIndex }

  const removeItemHandler = () => {
    if (window.confirm(`Вы действительно хотите удалить пиццу ${title}, ${sizes[sizeIndex]} см. ${pizzaTypes[typeIndex]} тесто?`)) {
      dispatch(removeFromOrder(cartItem))
    }
  }
  const incrementHandler = () => dispatch(increment(cartItem))
  const decrementHandler = () => dispatch(decrement(cartItem))

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.info}>
          <div className={styles.image}>
            <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg' alt='Pizza' />
          </div>
          <div className={styles.infoText}>
            <h3>{title}</h3>
            <p>
              {pizzaTypes[typeIndex]} тесто, {sizes[sizeIndex]} см.
            </p>
            <p>{pricePrettify(weights[sizeIndex] * quantity)} гр.</p>
          </div>
        </div>
        <div className={styles.count}>
          <div className={styles.countBlock}>
            <CircleControl minus onClick={decrementHandler} disabled={quantity === 1} />
            <b>{quantity}</b>
            <CircleControl plus onClick={incrementHandler} />
          </div>
        </div>
        <div className={styles.price}>
          <b>{pricePrettify(prices[sizeIndex] * quantity)} ₽</b>
        </div>
        <div className={styles.remove}>
          <CircleControl remove onClick={removeItemHandler} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
