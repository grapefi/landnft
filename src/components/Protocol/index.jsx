import protocol1Img from '../../assets/protocols/protocol1.png'
import protocol2Img from '../../assets/protocols/protocol2.png'
import protocol3Img from '../../assets/protocols/protocol3.png'
import Section from '../Section'
import Button from '../Button'
import './style.scss'

const PROTOCOLS = [
  {
    title: 'LP FARMS',
    img: protocol1Img,
    rules: [
      'Incentivized LP Rewards',
      'Claim Whenever You Want',
      'Multi-Year Emissions (Long Term Growth)',
    ],
    buttonText: 'FARM',
    href: 'https://app.miniverse.finance/farms',
  },
  {
    title: 'BOARDROOM',
    img: protocol2Img,
    rules: [
      'Prints MvDOLLAR if TWAP < 1.01',
      'Claim Every 12 Hours',
      'Pays Bond Premium To Keep PEG',
    ],
    buttonText: 'STAKE',
    href: 'https://app.miniverse.finance/boardroom',
  },
  {
    title: 'NFT GAMEFI',
    img: protocol3Img,
    rules: [
      'Gamified Nft Node Staking',
      'Breeding Game To Increase Emissions And Gain POL',
      'Life Time MvDOLLAR',
    ],
    buttonText: 'BREED',
    href: 'https://app.miniverse.finance/minichilla',
  },
]

const Protocol = () => {
  return (
    <Section title="PROTOCOL">
      <div className="protocols">
        {PROTOCOLS.map(({ title, img, rules, buttonText, href }) => (
          <div className="protocol" key={title}>
            <h3>{title}</h3>
            <div className="protocol__image">
              <img src={img} alt={title} />
            </div>
            <div className="protocol__rules">
              {rules.map((rule) => (
                <div className="protocol__rule" key={rule}>
                  {rule}
                </div>
              ))}
            </div>
            <Button size="medium" href={href}>{buttonText}</Button>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Protocol
