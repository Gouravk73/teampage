import React from 'react'
import './MentorAdvisor.css'
import img from '../assets/MentorPlaceholder.webp'

const MentorAdvisor = () => {
  return (
    <div className='mentor-advisor'>
        <h1>Meet Mentor and Advisor</h1>
        <div className="container">
            <div className="profile-picture">
                <img src={img} alt=' '/>
                <p>'Dr. Onkar'</p>
                <p>Principal Project <br /><br /> IIT Madras</p>
            </div>
            <div className="profile-picture">
                <img src={img} alt=' '/>
                <p>'Vivek Dwivedi'</p> 
                <p className='message'> <a href="https://web.whatsapp.com/" target='blank'> Message Him Now</a></p>
            </div>
            <div className="profile-picture">
                <img src={img} alt=' '/>
                <p > 'Akhil Tripathi'</p> 
                <p className='message'> <a href="https://web.whatsapp.com/" target='blank'> Message Him Now</a></p>

            </div>

        </div>
           
    </div>
  )
}

export default MentorAdvisor