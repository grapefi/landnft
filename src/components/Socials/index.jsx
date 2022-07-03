// Listings
import image8 from '../../assets/social/image8.png'
import image9 from '../../assets/social/image9.png'
import image10 from '../../assets/social/image10.png'

// Socials
import shareImg from '../../assets/social/links-dark.png'
import twitterImg from '../../assets/social/twitter-dark.png'
import discordImg from '../../assets/social/discord-dark.png'
import youtubeImg from '../../assets/social/youtube-dark.png'
import docsImg from '../../assets/social/docs-dark.png'
import './style.scss'

const listings = [
  {
    icon: image8,
    href: '#',
  },
  {
    icon: image9,
    href: '#',
  },
  {
    icon: image10,
    href: '#',
  },
]

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
    href: 'https://discord.com/invite/fr4w38NXX5',
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

const Socials = () => {
  return (
    <div className="socials">
      <ul className="list">
        {listings.map(({ icon, href }, index) => (
          <a key={index} href={href}>
            <img className="icon" src={icon} alt="social icon" />
          </a>
        ))}
      </ul>

      <ul className="list">
        {socials.map(({ icon, href }, index) => (
          <a key={index} href={href}>
            <img className="icon" src={icon} alt="social icon" />
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Socials
