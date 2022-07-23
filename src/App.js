import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound/NotFound'

import './scss/app.scss'

export const Context = createContext(null)

function App() {
  const [categoryId, setCategoryId] = useState(0)
  const [sortId, setSortId] = useState(0)
  const [search, setSearch] = useState('')

  const store = {
    categoryId,
    setCategoryId,
    sortId,
    setSortId,
    search,
    setSearch,
  }

  return (
    <Context.Provider value={store}>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
