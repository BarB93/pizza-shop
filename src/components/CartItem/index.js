import React from 'react'

import CircleControl from '../UI/Controls/CircleControl'
import styles from './CartItem.module.scss'

const CartItem = () => {
  return (
    <div className={`${styles.item}`}>
      <div className={`${styles.item__image}`}>
        <img
          src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
          alt='Pizza'
        />
      </div>
      <div className={`${styles.item__info}`}>
        <h3>Сырный цыпленок</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className={`${styles.item__count}`}>
        <CircleControl minus />
        <b>2</b>
        <CircleControl plus />
      </div>
      <div className={`${styles.item__price}`}>
        <b>770 ₽</b>
      </div>
      <div className={`${styles.item__remove}`}>
        <CircleControl remove />
      </div>
    </div>
  )
}

export default CartItem
