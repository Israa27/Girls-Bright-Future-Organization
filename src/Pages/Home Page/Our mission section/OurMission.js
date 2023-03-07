import React from 'react'
import './ourMission.scss';
import img from '../../../Assets/images/image_2.jpeg'
export default function OurMission() {
  return (
    <div className='mission-section'>
     <div className='text'>
     <span>our mission</span>
     <p>The mission of the Girls Bright Future Initiative (GBFI) is to ensure that every girl can receive quality education and achieve their dreams, to provide them with the essentials 
     for safe periods, and to raise awareness of their sexual and reproductive health.</p>
     </div>
     <div className='image'>
     <div className='over-background'></div>
     <img src={img} alt=''/>
     </div>
      
    </div>
  )
}
