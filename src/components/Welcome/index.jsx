import React from 'react'
import Button from '../Button'
import './style.scss'

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>WELCOME TO THE MINIVERSE</h1>
      <h3>NFT GAMEFI MEETS ALGORITHMIC STABLE COIN</h3>
      <Button size="large" href="https://app.mvfinance.club/">ENTER</Button>
    </div>
  )
}

export default Welcome
