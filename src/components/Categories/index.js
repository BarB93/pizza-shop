import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../../App'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Categories.module.scss'

const Categories = () => {
  const { categoryId, setCategoryId } = useContext(Context)

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'C грибами']

  return (
    <div className={styles.categories}>
      <div className={styles.list}>
        <Swiper slidesPerView='auto' initialSlide={categoryId}>
          {categories.map((category, index) => (
            <SwiperSlide key={category} className={`${styles.slide} ${index === categoryId ? styles.active : ''}`} onClick={() => setCategoryId(index)}>
              {category}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Categories
