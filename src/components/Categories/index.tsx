import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { setCategoryId } from '../../redux/slices/categorySlice'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Categories.module.scss'

const Categories: FC = () => {
  const categoryId = useAppSelector(state => state.category.categoryId)
  const dispatch = useAppDispatch()

  const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'C грибами']

  return (
    <div className={styles.categories}>
      <div className={styles.list}>
        <Swiper slidesPerView='auto' initialSlide={categoryId as number}>
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
