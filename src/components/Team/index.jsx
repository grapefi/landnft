import React from 'react'
import Section from '../Section'
import nateImage from '../../assets/team/nate.png'
import nickBImage from '../../assets/team/nickb.png'
import guienaImage from '../../assets/team/guiena.png'
import ericImage from '../../assets/team/eric.png'
import davidImage from '../../assets/team/david.png'
import daveImage from '../../assets/team/dave.png'
import havocImage from '../../assets/team/havoc.png'
import ganonImage from '../../assets/team/ganon.png'

import './style.scss'

const TEAM_LIST = [
  {
    name: 'Nate1',
    image: nateImage,
    job: 'Developer',
  },
  {
    name: 'NickB',
    image: nickBImage,
    job: 'Advisor',
  },
  {
    name: 'Guinea Picasso',
    image: guienaImage,
    job: 'Artist',
  },
  {
    name: 'Eric',
    image: ericImage,
    job: 'Marketing',
  },
  {
    name: 'David Defi',
    image: davidImage,
    job: 'Blockchain Developer',
  },
  {
    name: 'Dave',
    image: daveImage,
    job: 'Graphics',
  },
  {
    name: 'Havoc',
    image: havocImage,
    job: 'Marketing',
  },
  {
    name: 'GaNoN',
    image: ganonImage,
    job: 'Marketing',
  },
]

const TeamMember = ({ name, image, job }) => {
  return (
    <div className="team__member">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <span>{job}</span>
    </div>
  )
}

const Team = () => {
  return (
    <div className="teamSection">
      <h2>OUR TEAM</h2>
      <div className="team" id="team-members">
        {TEAM_LIST.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  )
}

export default Team
