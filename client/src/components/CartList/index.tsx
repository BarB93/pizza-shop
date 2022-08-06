import React from 'react'
import { useAppSelector } from '../../hooks'
import CartItem from '../CartItem'

const CartList: React.FC = () => {
  const order = useAppSelector(state => state.cart.order)

  return (
    <>
      {order.map(item => (
        <CartItem key={item._id + item.sizeIndex + item.typeIndex} {...item} />
      ))}
    </>
  )
}

export default CartList
