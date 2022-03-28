import React from 'react'
import './style.scss'

const Button = ({ rounded = false, children, href = '#' }) => {
  return (
    <a className={`button ${rounded ? 'rounded' : ''}`} href={href}>
      {children}
    </a>
  )
}

export default Button
