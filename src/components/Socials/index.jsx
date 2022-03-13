import bookdImg from '../../assets/social/bookLarge.png'
import discordImg from '../../assets/social/discordLarge.png'
import shareImg from '../../assets/social/shareLarge.png'
import twitterImg from '../../assets/social/twitterLarge.png'
import youtubeImg from '../../assets/social/youtubeLarge.png'
import './style.scss'

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

const Socials = () => {
  return (
    <div className="socials">
      <h3>SOCIALS</h3>
      <div className="socials__accounts">
        {socials.map(({icon, href}, index) => (
          <a key={index} href={href}>
            <img className="icon" src={icon} alt="social icon" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
