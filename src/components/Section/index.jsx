import React from 'react'
import './style.scss'

const Section = ({ title, children }) => {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
