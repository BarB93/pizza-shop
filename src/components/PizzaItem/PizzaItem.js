import React, { useCallback, useEffect, useRef, useState } from 'react'

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
    if($infoBlock.current && $title.current && $description.current) {
      const blockHeight = $infoBlock.current.clientHeight
      const titleHeight = $title.current.clientHeight
      const descriptionHeight = $description.current.clientHeight

      if(blockHeight < titleHeight + descriptionHeight) {
        const result = desc.trim().split(' ').slice(0, -1).join(' ') + '...'
        setDesc(result)
      }

    }
  }

  useEffect(() => {
    window.addEventListener('resize', trimLengthDescription)
    return window.removeEventListener('resize', trimLengthDescription)
  },[])

  useEffect(() => {
      trimLengthDescription()
  }, [desc])

  return (
    <div className='wrapper-pizza-block'>
      <div className={`pizza-block ${activePizza ? 'active' : ''}`}>
        <img className='pizza-block__image' src={imageUrl} alt={title} />
        <div ref={$infoBlock} className='pizza-block__info'>
          <h4 ref={$title}  className='pizza-block__title'>{title}</h4>
          <div ref={$description} className='pizza-block__description'>{desc}</div>
        </div>
        <div className='pizza-block__bottom'>
          <button className='pizza-block__btn-select' onClick={() => setActivePizza(true)}>Выбрать</button>
          <span className={'pizza-block__price'}>от {price} ₽</span>
        </div>
        <div className='pizza-block__selector selector'>
          <h4 className='pizza-block__title'>{title}</h4>
          <div className='pizza-block__description'>{description}</div>
          <ul className='selector__sizes'>
            {sizes.map((s, index) => (
              <li key={s} className={`selector__size ${activeSize === index ? 'active' : ''}`} onClick={() => setActiveSize(index)}>
                {s} см.
              </li>
            ))}
          </ul>
          <ul className='selector__types'>
            {types.map((typeId) => (
              <li key={typeId} className={`selector__type ${activeType === typeId ? 'active' : ''}`} onClick={() => setActiveType(typeId)}>
                {pizzaTypes[typeId]}
              </li>
            ))}
          </ul>
          <div className='selector__bottom'>
            <button className='selector__btn'>
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
