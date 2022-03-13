import React from 'react'
import './style.scss'

const Button = ({ size = 'medium', children, href="#" }) => {
  return <a className={`button ${size ? size : ''}`} href={href}>{children}</a>
}

export default Button
