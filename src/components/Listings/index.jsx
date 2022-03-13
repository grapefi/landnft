import React from 'react'
import Section from '../Section'
import './style.scss'
import cmcImage from '../../assets/listings/cmc.png'
import cgImage from '../../assets/listings/cg.png'
import dlImage from '../../assets/listings/dl.png'

const LISTINGS = [
  {
    title: 'CMC',
    image: cmcImage,
    href: 'https://coinmarketcap.com/currencies/miniverse-share/'
  },
  {
    title: 'CG',
    image: cgImage,
    href: 'https://www.coingecko.com/en/coins/miniverse-share'
  },
  {
    title: 'DL',
    image: dlImage,
    href: 'https://defillama.com/protocol/miniverse-finance'
  },
]

const Listings = () => {
  return (
    <Section>
      <div className="listings">
        <h3>LISTINGS</h3>
        <div className="listings__grid">
          {LISTINGS.map(({ title, image, href }) => (
            <a className="listings__grid-item" key={title} href={href}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Listings
