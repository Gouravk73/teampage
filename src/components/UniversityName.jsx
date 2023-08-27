import React from 'react'
import './UniversityName.css'
const UniversityName = () => {
    const universityName = ['cambridge University', 'Harvard University',
    'University of California','ETH Zurich','Max Planck', 
    'university of Edinberg','Johns\'  Hopkins','University of Illinois ',
    'Humboldt University Berlin']
  return (
    <div className='university'>
        { universityName.map((item,index)=><div key={index} className='box'>
                <p>{item}</p>
        </div>) }
    </div>

  )
}

export default UniversityName