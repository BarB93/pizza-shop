import React from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({type, children, className, onClick}) => {
  const classes = clsx(
    styles.button, 
    type === 'select' && styles.select,
    type === 'transparent' && styles.transparent,
    type === 'black' && styles.black,
    className && className
  )
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button