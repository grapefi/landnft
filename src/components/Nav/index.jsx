import React from 'react'
import './style.scss'
import logo from '../../assets/brand_logo.png'
import Button from '../Button'

const Links = [
  {
    label: 'Team',
    href: '#team-members',
  },
  {
    label: 'Links',
    href: 'https://linktr.ee/miniverseclub',
  },
  {
    label: 'Docs',
    href: 'https://miniversefinance.gitbook.io/docs/',
  },
  {
    label: 'Audit',
    href: 'https://github.com/0xGuard-com/audit-reports/blob/master/mini-verse/miniverse-report.pdf',
  },
]

const Nav = () => {
  return (
    <nav className="nav">
      <Button href="https://app.mvfinance.club/">ENTER DAPP</Button>
      <ul className="links">
        {Links.map(({ label, href }, index) => (
          <React.Fragment key={index}>
            <a href={href}>{label}</a>
            {index + 1 !== Links.length && <span>|</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
