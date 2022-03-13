import React from 'react'
import Section from '../Section'
import img1 from '../../assets/team/1.png'
import img2 from '../../assets/team/2.png'
import img3 from '../../assets/team/3.png'
import img4 from '../../assets/team/4.png'
import img5 from '../../assets/team/5.png'
import img6 from '../../assets/team/6.png'
import './style.scss'

const TEAM_LIST = [
  {
    name: 'NATE1',
    image: img6,
    job: 'DEV',
  },
  {
    name: 'NICKB',
    image: img4,
    job: 'ADVISOR',
  },
  {
    name: 'GUINEA PICASSO',
    image: img2,
    job: 'ARTIST',
  },
  {
    name: 'DAVE',
    image: img1,
    job: 'GRAPHICS',
  },
  {
    name: 'HAVOC',
    image: img5,
    job: 'MARKETING',
  },
  {
    name: 'ERIC',
    image: img3,
    job: 'MARKETING',
  }
]

const TeamMember = ({ name, image, job }) => {
  return (
    <div className="team__member">
      <h3>{name}</h3>
      <div className="card">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <span>{job}</span>
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <Section title="TEAM">
      <div className="team" id="team-members">
        {TEAM_LIST.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </Section>
  )
}

export default Team
