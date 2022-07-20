import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Categories.module.scss'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(4)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'C грибами']

  return (
    <div className={styles.categories}>
      <div className={styles.list}>
        <Swiper slidesPerView='auto' initialSlide={activeCategory}>
          {categories.map((category, index) => (
            <SwiperSlide key={category} className={`${styles.slide} ${index === activeCategory ? styles.active : ''}`} onClick={() => setActiveCategory(index)}>
              {category}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Categories
