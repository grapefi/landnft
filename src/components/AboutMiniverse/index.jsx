import React from 'react'
import desktopImage from '../../assets/desktopAboutMiniverse.png'
import mobileImage from '../../assets/mobileAboutMiniverse.png'
import './style.scss'

const AboutMiniverse = () => {
  return (
    <div className="aboutMiniverse">
      <h2>ABOUT MINIVERSE</h2>
      <div className="image">
        <img src={desktopImage} className="desktop" alt="about miniverse" />
        <img src={mobileImage} className="mobile" alt="about miniverse" />
      </div>
    </div>
  )
}

export default AboutMiniverse
