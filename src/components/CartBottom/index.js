import React from 'react'

import Button from '../UI/Controls/Button'
import { Link } from 'react-router-dom'

import styles from './CartBottom.module.scss'

const CartBottom = () => {
  return (
    <div className={`${styles.bottom}`}>
      <div className={`${styles.bottom__details}`}>
        <span>
          Всего пицц: <b>3 шт.</b>
        </span>
        <span>
          Сумма заказа: <b>900 ₽</b>
        </span>
      </div>
      <div className={`${styles.bottom__buttons}`}>
        <Link to='/' className='button button--outline button--add go-back-btn'>
          <Button className={styles.btnBack}>
            <svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7 13L1 6.93015L6.86175 1' stroke='#D3D3D3' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>

            <span>Вернуться назад</span>
          </Button>
        </Link>
        <Button>Оплатить сейчас</Button>
      </div>
    </div>
  )
}

export default CartBottom
