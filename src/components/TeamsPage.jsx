import React from 'react'
import UniversityName from './UniversityName'
import Mentor from './Mentor'
import MentorAdvisor from './MentorAdvisor'

const TeamsPage = () => {
  return (
    <div>
        <h1>TeamsPage</h1>
        <h6 style={{textAlign:'center',fontSize:'1.2rem',color:'#793FDF'}}>Learn from scientists, research scholars from the top institutes in the world</h6>
        <UniversityName/>
        <Mentor/>
        <MentorAdvisor/>
    </div>
  )
}

export default TeamsPage