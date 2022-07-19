import React from 'react'

import styles from './PizzaItem.module.scss'

const PizzaItemSkeleton = (props) => {
  return (
    <div className={`${styles.wrapperPizzaBlock}`}>
      <div className={`${styles.pizzaBlock}`}>
        <div className={`${styles.pizzaBlockSkeleton__imageWrapper}`}>
          <div className={`${styles.pizzaBlockSkeleton__image} skeleton`}></div>
        </div>
        <div className={`${styles.pizzaBlockSkeleton__info} ${styles.pizzaBlock__info} skeleton`}></div>
        <div className={`${styles.pizzaBlockSkeleton__footer}`}>
          <div  className={`${styles.pizzaBlockSkeleton__bottom}`}>
              <div className={`${styles.pizzaBlockSkeleton__btn} skeleton`}></div>
              <div className={`${styles.pizzaBlockSkeleton__price} skeleton`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItemSkeleton
