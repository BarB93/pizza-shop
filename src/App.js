import Categories from './components/Categories'
import Header from './components/Header'
import PizzaList from './components/PizzaList'
import Sort from './components/Sort'

import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <PizzaList />
        </div>
      </div>
    </div>
  )
}

export default App
