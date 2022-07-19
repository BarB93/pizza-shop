import React, { useEffect, useRef, useState } from 'react'

import styles from './PizzaItem.module.scss'

const PizzaItem = ({ title, price, imageUrl, sizes, types, description }) => {
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(0)
  const [activePizza, setActivePizza] = useState(false)
  const [desc, setDesc] = useState(description)
  const pizzaTypes = ['тонкое', 'традиционное']
  const pricesForSize = [0, 280, 420]
  const $infoBlock = useRef(null)
  const $title = useRef(null)
  const $description = useRef(null)

  const trimLengthDescription = () => {
    if ($infoBlock.current && $title.current && $description.current) {
      const blockHeight = $infoBlock.current.clientHeight
      const titleHeight = $title.current.clientHeight
      const descriptionHeight = $description.current.clientHeight

      if (blockHeight < titleHeight + descriptionHeight) {
        const result = desc.trim().split(' ').slice(0, -1).join(' ') + '...'
        setDesc(result)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', trimLengthDescription)
    return () => window.removeEventListener('resize', trimLengthDescription)
  }, [])

  useEffect(() => {
    trimLengthDescription()
  }, [desc])

  return (
    <div className={styles.wrapperPizzaBlock}>
      <div className={`${styles.pizzaBlock} ${activePizza ? styles.active : ''}`}>
        <img className={`${styles.pizzaBlock__image}`} src={imageUrl} alt={title} />
        <div ref={$infoBlock} className={`${styles.pizzaBlock__info}`}>
          <h4 ref={$title} className={`${styles.pizzaBlock__title}`}>
            {title}
          </h4>
          <div ref={$description} className={`${styles.pizzaBlock__description}`}>
            {desc}
          </div>
        </div>
        <div className={`${styles.pizzaBlock__bottom}`}>
          <button className={`${styles.pizzaBlock__btnSelect}`} onClick={() => setActivePizza(true)}>
            Выбрать
          </button>
          <span className={`${styles.pizzaBlock__price}`}>от {price} ₽</span>
        </div>
        <div className={`${styles.pizzaBlock__selector} ${styles.selector}`}>
          <h4 className={`${styles.pizzaBlock__title}`}>{title}</h4>
          <div className={`${styles.pizzaBlock__description}`}>{description}</div>
          <ul className={`${styles.selector__sizes}`}>
            {sizes.map((s, index) => (
              <li key={s} className={`${styles.selector__size} ${activeSize === index ? styles.active : ''}`} onClick={() => setActiveSize(index)}>
                {s} см.
              </li>
            ))}
          </ul>
          <ul className={`${styles.selector__types}`}>
            {types.map((typeId) => (
              <li key={typeId} className={`${styles.selector__type} ${activeType === typeId ? styles.active : ''}`} onClick={() => setActiveType(typeId)}>
                {pizzaTypes[typeId]}
              </li>
            ))}
          </ul>
          <div className={`${styles.selector__bottom}`}>
            <button className={`${styles.selector__btn}`}>
              <span>В корзину</span>
              <span>{price + pricesForSize[activeSize]} ₽</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
