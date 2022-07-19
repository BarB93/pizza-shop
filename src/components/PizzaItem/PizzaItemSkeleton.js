import React from 'react'

const PizzaItemSkeleton = (props) => {
  return (
    <div className='wrapper-pizza-block'>
      <div className='pizza-block'>
        <div className='pizza-block-skeleton__image-wrapper'>
          <div className='pizza-block-skeleton__image skeleton'></div>
        </div>
        <div className='pizza-block-skeleton__info pizza-block__info skeleton'></div>
        <div className='pizza-block-skeleton__footer'>
          <div  className='pizza-block-skeleton__bottom'>
              <div className='pizza-block-skeleton__btn skeleton'></div>
              <div className='pizza-block-skeleton__price skeleton'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaItemSkeleton
