import React from 'react'
import './style.scss'
import shareImg from '../../assets/social/share.png'
import twitterImg from '../../assets/social/twitter.png'
import discordImg from '../../assets/social/discord.png'
import youtubeImg from '../../assets/social/youtube.png'
import bookdImg from '../../assets/social/book.png'
import headerImg from '../../assets/header.png'
import approvedImg from '../../assets/approved.png'

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
    icon: bookdImg,
    href: 'https://miniversefinance.gitbook.io/docs/',    
  }
]

const Header = () => {
  return (
    <header>
      <img className="header__image" src={headerImg} alt="header_image" />
      <div className="social__buttons">
        <div className="buttons">
          {socials.map(({icon, href}, index) => (
            <a key={index} href={href}>
              <img className="icon" src={icon} alt="social icon" />
            </a>
          ))}
        </div>
        <button>
          <img className="approved" src={approvedImg} alt="aproved_image" />
        </button>
      </div>
    </header>
  )
}

export default Header
