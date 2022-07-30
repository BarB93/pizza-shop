import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'

const CartList = () => {
  const order = useSelector(state => state.cart.order)

  return (
    <>
      {order.map(item => <CartItem key={item.title + item.sizeIndex} {...item}/>)}
    </>
  )
}

export default CartList
