import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import pricePrettify from '../../utils/pricePrettify'

import Button from '../UI/Controls/Button'

import styles from './CartBottom.module.scss'

const CartBottom: React.FC = () => {
  const { totalCount, totalPrice, totalWeight } = useAppSelector(state => state.cart)

  return (
    <div className={styles.bottom}>
      <div className={styles.bottom__details}>
        <div className={styles.bottom__detailsLeft}>
          <span>
            Всего пицц: <b>{pricePrettify(totalCount)} шт.</b>
          </span>
          <span>
            Общий вес: <b>{pricePrettify(totalWeight)} гр.</b>
          </span>
        </div>
        <div className={styles.bottom__detailsRight}>
          <span>
            Сумма заказа: <b>{pricePrettify(totalPrice)} ₽</b>
          </span>
        </div>
      </div>
      <div className={styles.bottom__buttons}>
        <Link to='/' className='button button--outline button--add go-back-btn'>
          <Button className={styles.btnBack} type='transparent'>
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
