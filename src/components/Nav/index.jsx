import React from 'react'
import './style.scss'

const Links = [
  {
    label: 'TEAM',
    href: '#team-members',
  },
  {
    label: 'DOCS',
    href: 'https://miniversefinance.gitbook.io/docs/',
  },
  {
    label: 'LINKS',
    href: 'https://linktr.ee/miniverseclub',
  },
  {
    label: 'AUDITS',
    href: 'https://github.com/0xGuard-com/audit-reports/blob/master/mini-verse/miniverse-report.pdf',
  },
]

const Nav = () => {
  return (
    <nav className="nav">
      {Links.map(({ label, href }) => (
        <a href={href}>{label}</a>
      ))}
    </nav>
  )
}

export default Nav
