import React from 'react'

import styles from './Button.module.scss'

const Button = ({type, children, className, onClick}) => {
  let classes = `${styles.button} `
  if(type === 'select') classes += styles.select
  if(className) classes += className
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button