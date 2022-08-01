import React from 'react'
import { useAppSelector } from '../../hooks'
import CartItem from '../CartItem'

const CartList: React.FC = () => {
  const order = useAppSelector(state => state.cart.order)

  return (
    <>
      {order.map(item => (
        <CartItem key={item.title + item.sizeIndex} {...item} />
      ))}
    </>
  )
}

export default CartList
