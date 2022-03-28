import React from 'react'
import './style.scss'
import brandLogo from '../../assets/brand_logo.png'
import shareImg from '../../assets/social/links-light.png'
import twitterImg from '../../assets/social/twitter-light.png'
import discordImg from '../../assets/social/discord-light.png'
import youtubeImg from '../../assets/social/youtube-light.png'
import docsImg from '../../assets/social/docs-light.png'

const socials = [
  {
    icon: shareImg,
    href: 'https://linktr.ee/miniverseclub',
  },
  {
    icon: twitterImg,
    href: 'https://twitter.com/miniverse_fin',
  },
  {
    icon: discordImg,
    href: 'https://discord.com/invite/CxRWUGSyRv',
  },
  {
    icon: youtubeImg,
    href: 'https://www.youtube.com/channel/UCauo_D4j7RfI4NXxxBibC5g?sub_confirmation=1',
  },
  {
    icon: docsImg,
    href: 'https://miniversefinance.gitbook.io/docs/',
  },
]

const Header = () => {
  return (
    <header>
      <img className="header__image" src={brandLogo} alt="brand" />

      <ul className="socialList">
        {socials.map((social, index) => (
          <a href={social.href} target="_blank" key={index}>
            <img src={social.icon} alt="social icon" />
          </a>
        ))}
      </ul>
    </header>
  )
}

export default Header
