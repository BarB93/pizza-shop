import React from 'react'
import clsx from 'clsx'

import styles from './PizzaItem.module.scss'

const PizzaItemSkeleton: React.FC = () => {
  return (
    <div className={styles.wrapperPizzaBlock}>
      <div className={clsx(styles.pizzaBlock, styles.skeleton)}>
        <div className={styles.skeletonWrapper}>
          <div className={clsx('skeleton', styles.skeletonImage)}></div>
        </div>
        <div className={clsx('skeleton', styles.skeletonInfo, styles.info)}></div>
        <div className={styles.skeletonFooter}>
          <div className={styles.skeletonBottom}>
            <div className={clsx('skeleton', styles.skeletonBtn)}></div>
            <div className={clsx('skeleton', styles.skeletonPrice)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItemSkeleton
