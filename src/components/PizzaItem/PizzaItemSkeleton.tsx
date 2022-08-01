import React from 'react'
import clsx from 'clsx'

import styles from './PizzaItem.module.scss'

const PizzaItemSkeleton: React.FC = () => {
  return (
    <div className={styles.wrapperPizzaBlock}>
      <div className={styles.pizzaBlock}>
        <div className={styles.pizzaBlockSkeleton__imageWrapper}>
          <div className={clsx('skeleton', styles.pizzaBlockSkeleton__image)}></div>
        </div>
        <div className={clsx('skeleton', styles.pizzaBlockSkeleton__info, styles.pizzaBlock__info)}></div>
        <div className={styles.pizzaBlockSkeleton__footer}>
          <div className={styles.pizzaBlockSkeleton__bottom}>
            <div className={clsx('skeleton', styles.pizzaBlockSkeleton__btn)}></div>
            <div className={clsx('skeleton', styles.pizzaBlockSkeleton__price)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItemSkeleton
