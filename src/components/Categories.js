import React, { useState } from 'react'

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытыe'
    ]
    
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => <li key={category} className={index === activeCategory ? 'active' : ''} onClick={() => setActiveCategory(index)}>{category}</li>)}
      </ul>
    </div>
  )
}

export default Categories
