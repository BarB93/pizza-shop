import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import { OrderItem } from '../../redux/slices/cartSlice/types'
import { Pizza } from '../../redux/slices/pizzaSlice/types'
import { addToOrder} from '../../redux/slices/cartSlice'
import Button from '../UI/Controls/Button'

import styles from './PizzaItem.module.scss'

export const pizzaTypes: string[] = ['тонкое', 'традиционное']

type PizzaItemProps = {
  pizza: Pizza
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const { title, description, prices, imageUrl, sizes, types } = pizza
  const dispatch = useDispatch()
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(0)
  const [isActivePizza, setIsActivePizza] = useState(false)
  const [desc, setDesc] = useState(description)
  const $infoBlock = useRef<HTMLDivElement>(null)
  const $title = useRef<HTMLHeadingElement>(null)
  const $description = useRef<HTMLDivElement>(null)

  const cartItem: OrderItem = {
    ...pizza,
    typeIndex: activeType,
    sizeIndex: activeSize,
    quantity: 1,
  }

  const trimLengthDescription = () => {
    if ($infoBlock.current && $title.current && $description.current) {
      const blockHeight: number = $infoBlock.current.clientHeight
      const titleHeight: number = $title.current.clientHeight
      const descriptionHeight: number = $description.current.clientHeight

      if (blockHeight < titleHeight + descriptionHeight) {
        const result = desc.trim().split(' ').slice(0, -1).join(' ') + '...'
        setDesc(result)
      }
    }
  }

  const addToOrderHandler = () => {
    dispatch(addToOrder(cartItem))
  }

  useEffect(() => {
    window.addEventListener('resize', trimLengthDescription)
    return () => window.removeEventListener('resize', trimLengthDescription)

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    trimLengthDescription()

    // eslint-disable-next-line
  }, [desc])

  return (
    <div className={styles.wrapperPizzaBlock}>
      <div className={clsx(styles.pizzaBlock, isActivePizza && styles.active)}>
        <img className={styles.pizzaBlock__image} src={imageUrl} alt={title} />
        <div ref={$infoBlock} className={styles.pizzaBlock__info}>
          <h4 ref={$title} className={styles.pizzaBlock__title}>
            {title}
          </h4>
          <div ref={$description} className={styles.pizzaBlock__description}>
            {desc}
          </div>
        </div>
        <div className={styles.pizzaBlock__bottom}>
          <Button type='select' onClick={() => setIsActivePizza(true)}>
            Выбрать
          </Button>
          <span className={styles.pizzaBlock__price}>от {prices[0]} ₽</span>
        </div>
        <div className={clsx(styles.pizzaBlock__selector, styles.selector)}>
          <h4 className={styles.pizzaBlock__title}>{title}</h4>
          <div className={styles.pizzaBlock__description}>{description}</div>
          <ul className={styles.selector__sizes}>
            {sizes.map((s, index) => (
              <li key={s} className={clsx(styles.selector__size, activeSize === index && styles.active)} onClick={() => setActiveSize(index)}>
                {s} см.
              </li>
            ))}
          </ul>
          <ul className={styles.selector__types}>
            {types.map(typeId => (
              <li key={typeId} className={clsx(styles.selector__type, activeType === typeId && styles.active)} onClick={() => setActiveType(typeId)}>
                {pizzaTypes[typeId]}
              </li>
            ))}
          </ul>
          <div className={styles.selector__bottom}>
            <button className={styles.selector__btn} onClick={addToOrderHandler}>
              <span>В корзину</span>
              <span>{prices[activeSize]} ₽</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
