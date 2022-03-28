import React from 'react'
import Button from '../Button'
import './style.scss'

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>WELCOME TO</h1>
      <h1>MINIVERSE</h1>
      <h3>NFT GAMEFI MEETS ALGORITHMIC STABLE COIN</h3>
      <div className="buttons">
        <Button rounded href="https://app.mvfinance.club/">
          ENTER
        </Button>
        <Button rounded href="https://app.mvfinance.club/">
          BREEDING GAME
        </Button>
      </div>
    </div>
  )
}

export default Welcome
