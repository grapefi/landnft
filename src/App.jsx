import React from 'react'
import './app.scss'
import Header from './components/Header'
import Listings from './components/Listings'
import Nav from './components/Nav'
import Protocol from './components/Protocol'
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
      <Protocol />
      <Team />
      <Listings />
      <Socials />
    </div>
  )
}

export default App
