import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { OrderItem } from './redux/slices/cart/types'
import { setOrder } from './redux/slices/cart/slice'
import { ORDER_NAME_IN_LOCAL_STORAGE, routes } from './utils/consts'
import useAppDispatch from './hooks/useAppDispatch'
import Header from './components/Header'
import LoaderCircle from './components/UI/Loaders/index'

import Home from './pages/Home'

import './scss/app.scss'

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'))

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  // try get order from localstorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const orderStr = window.localStorage.getItem(ORDER_NAME_IN_LOCAL_STORAGE)
      if (orderStr) {
        const orderArr: OrderItem[] = JSON.parse(orderStr)
        orderArr?.length && dispatch(setOrder(orderArr))
      }
    }

    // eslint-disable-next-line
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Suspense fallback={<LoaderCircle />}>
          <Routes>
            <Route path={routes.HOME_ROUTE} element={<Home />} />
            <Route path={routes.CART_ROUTE} element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
