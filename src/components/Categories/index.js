import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'

import { setCategoryId } from '../../redux/slices/categorySlice'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Categories.module.scss'

const Categories = () => {
  const categoryId = useSelector(state => state.category.categoryId)
  const dispatch = useDispatch()

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'C грибами']

  return (
    <div className={styles.categories}>
      <div className={styles.list}>
        <Swiper slidesPerView='auto' initialSlide={categoryId}>
          {categories.map((category, index) => (
            <SwiperSlide key={category} className={clsx(styles.slide, index === categoryId && styles.active)} onClick={() => dispatch(setCategoryId(index))}>
              {category}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Categories
