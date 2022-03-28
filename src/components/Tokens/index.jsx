import mvBondImage from '../../assets/mvBond.png'
import mvDollarImage from '../../assets/mvDollar.png'
import mvShareImage from '../../assets/mvShare.png'
import mvGoldImage from '../../assets/mvGold.png'
import Button from '../Button'
import './style.scss'

const TOKENS = [
  {
    href: 'https://dexscreener.com/fantom/0x35bed1e2f3033395a05cd0b1b5900209ece42774',
    title: 'MV DOLLAR',
    image: mvDollarImage,
    desc: 'Pegged 1:1 with USDC. Designed to hold close to USDC with inflationary and deflationary methods',
  },
  {
    href: 'https://dexscreener.com/fantom/0x92a7b2a9ca7d70573e3a0b0bf9e5232c70db8a89',
    title: 'MSHARE',
    image: mvShareImage,
    desc: 'Protocol shares token. Distributes MV Dollar to stakers when it’s over peg price.',
  },
  {
    href: 'https://dexscreener.com/fantom/0x92a7b2a9ca7d70573e3a0b0bf9e5232c70db8a89',
    title: 'MV BOND',
    image: mvBondImage,
    desc: 'Purcased with MV Dollar when under it is under peg price. Can be redeemed for bonuses over peg. MV Dollar used to buy bonds is burned.',
  },
  {
    title: 'MV GOLD',
    image: mvGoldImage,
    desc: 'In-Game currency token for the Miniverse NFT Breeding game.',
  },
]

const Token = ({ token }) => {
  return (
    <div className="token">
      <h3>{token.title}</h3>
      <div className="image">
        <img src={token.image} alt="" />
      </div>
      <p>{token.desc}</p>
      {token.href && (
        <Button rounded href={token.href}>
          CHART
        </Button>
      )}
    </div>
  )
}

const Tokens = () => {
  return (
    <div className="tokenSection">
      <h2>OUR TOKENS</h2>
      <div className="tokens">
        {TOKENS.map((token, index) => (
          <Token key={index} token={token} />
        ))}
      </div>
    </div>
  )
}

export default Tokens
