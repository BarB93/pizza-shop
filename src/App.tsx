import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound/NotFound'

import './scss/app.scss'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
