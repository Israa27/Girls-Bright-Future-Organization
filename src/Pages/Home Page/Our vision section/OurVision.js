import React from 'react'
import './ourVision.scss';
import img from '../../../Assets/images/image_3.jpeg'
export default function OurVision() {
  return (
    <div className='vision-section'>
    <div className='image'>
     <div className='over-background'></div>
     <img src={img} alt=''/>
     </div>
     <div className='text'>
     <span>our vision</span>
     <p>Our Vission in Girls Bright Future Foundation (GBFI) is to create a community where all girls have access to quality education, the essentials for safe periods and are aware of their sexual and reproductive health</p>
     </div>
     
      
    </div>
  )
}