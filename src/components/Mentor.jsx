import React, { useState } from 'react'
import img from '../assets/MentorPlaceholder.webp'
import './Mentor.css'
import data from '../assets/mentorsData/MeetMentor'
import {GrNext,GrPrevious} from "react-icons/gr"
const Mentor = () => {
    const itemsPerPage=4;
    const[startIndex,setStartIndex]=useState(0);
    const handleNext=()=>{
        const newIndex=startIndex+1;
        if (newIndex + itemsPerPage <= data.length) {
            setStartIndex(newIndex);
          }
          else {
            setStartIndex(0);
          }
    }
    const handlePrevious=()=>{
        const newIndex=startIndex-1;
        if (newIndex >= 0) {
            setStartIndex(newIndex);
          }
        else {
            setStartIndex(data.length - itemsPerPage);
           }
    }
    
   return (
    <div>
        <h1>Meet Your Mentors</h1>

    <div className='mentor'>
        <button onClick={handlePrevious}  >
        <GrPrevious size={'2rem'}  />
        </button>
        
            {data.slice(startIndex,startIndex+itemsPerPage).map((item,index)=> <div className="profile-picture" key={index}>
                <img src={img} alt={item.name}/>
                <p>{item.name}</p>
                <p>{item.college}</p>
            </div>)  }
            <button onClick={handleNext}  >
            <GrNext size={'2rem'}/>
        </button>
        
        
    </div>
    </div>
  )
}

export default Mentor