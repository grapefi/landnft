import React from 'react'
import './app.scss'
import AboutMiniverse from './components/AboutMiniverse'
import Header from './components/Header'
import Nav from './components/Nav'
import Socials from './components/Socials'
import Team from './components/Team'
import Tokens from './components/Tokens'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Welcome />
      <Tokens />
      <AboutMiniverse />
      <Team />
      <Socials />
    </div>
  )
}

export default App
