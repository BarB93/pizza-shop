import React, { useState } from 'react'

import styles from './Categories.module.scss'

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'C грибами'
    ]
    
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => <li key={category} className={index === activeCategory ? styles.active : ''} onClick={() => setActiveCategory(index)}>{category}</li>)}
      </ul>
    </div>
  )
}

export default Categories
