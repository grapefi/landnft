import mvBondImage from '../../assets/mvBond.png'
import mvDollarImage from '../../assets/mvDollar.png'
import mvShareImage from '../../assets/mvShare.png'
import Section from '../Section'
import './style.scss'

const TOKENS = [
  {
    href: 'https://dexscreener.com/fantom/0x35bed1e2f3033395a05cd0b1b5900209ece42774',
    title: 'MVDOLLAR',
    image: mvDollarImage,
    desc: 'PEGGED 1:1 WITH USDC',
  },
  {
    href: 'https://dexscreener.com/fantom/0x92a7b2a9ca7d70573e3a0b0bf9e5232c70db8a89',
    title: 'MSHARE',
    image: mvShareImage,
    desc: 'PROTOCOL SHARES',
  },
  {
    title: 'MVBOND',
    image: mvBondImage,
    desc: 'INCENTIVIZE 1:1 PEG W/ USDC',
  },
]

const Token = ({ token }) => {
  return (
    <div className="token">
      <h3>{token.title}</h3>
      {token.href && <a href={token.href}>CLICK FOR CHART</a>}
      <img src={token.image} alt="" />
      <p>{token.desc}</p>
    </div>
  )
}

const Tokens = () => {
  return (
    <Section title="TOKENS">
      <div className="tokens">
        {TOKENS.map((token, index) => (
          <Token key={index} token={token} />
        ))}
      </div>
    </Section>
  )
}

export default Tokens
