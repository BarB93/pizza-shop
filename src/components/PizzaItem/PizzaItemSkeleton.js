import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaItemSkeleton = (props) => {
  return (
    <div className='wrapper-pizza-block'>
      <ContentLoader className='pizza-block' speed={2} width={280} height={391} viewBox='0 0 280 391' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
        <rect x='0' y='264' rx='5' ry='5' width='280' height='60' />
        <rect x='0' y='352' rx='22' ry='22' width='124' height='40' />
        <rect x='201' y='362' rx='5' ry='5' width='74' height='27' />
        <circle cx='136' cy='122' r='120' />
      </ContentLoader>
    </div>
  )
}

export default PizzaItemSkeleton
