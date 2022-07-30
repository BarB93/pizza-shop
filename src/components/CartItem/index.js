import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeFromOrder } from '../../redux/slices/cartSlice'

import pricePrettify from './../../utils/pricePrettify'
import { pizzaTypes } from '../PizzaItem'
import CircleControl from '../UI/Controls/CircleControl'

import styles from './CartItem.module.scss'

const CartItem = ({ id, title, typeIndex, sizes, sizeIndex, prices, quantity, weights }) => {
  const dispatch = useDispatch()
  const cartItem = { id, sizeIndex, typeIndex }

  const removeItemHandler = () => {
    if (window.confirm(`Вы действительно хотите удалить пиццу ${title}, ${sizes[sizeIndex]} см. ${pizzaTypes[typeIndex]} тесто?`)) {
      dispatch(removeFromOrder(cartItem))
    }
  }
  const incrementHandler = () => dispatch(increment(cartItem))
  const decrementHandler = () => dispatch(decrement(cartItem))

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg' alt='Pizza' />
      </div>
      <div className={styles.item__info}>
        <h3>{title}</h3>
        <p>
          {pizzaTypes[typeIndex]} тесто, {sizes[sizeIndex]} см.
        </p>
        <p>{pricePrettify(weights[sizeIndex] * quantity)} гр.</p>
      </div>
      <div className={styles.item__count}>
        <div className={styles.item__countBlock}>
          <CircleControl minus onClick={decrementHandler} disabled={quantity === 1} />
          <b>{quantity}</b>
          <CircleControl plus onClick={incrementHandler} />
        </div>
      </div>
      <div className={styles.item__price}>
        <b>{pricePrettify(prices[sizeIndex] * quantity)} ₽</b>
      </div>
      <div className={styles.item__remove}>
        <CircleControl remove onClick={removeItemHandler} />
      </div>
    </div>
  )
}

export default CartItem
