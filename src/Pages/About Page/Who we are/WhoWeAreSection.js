import React from 'react'
import './about.scss';
import image from '../../../Assets/images/about.jpeg'
export default function WhoWeAreSection() {
  return (
    <div className='who-we-are-content'>
    <div className='image'>
    <img src={image} alt='' />
    </div>
    <div className='text'>
    <span>Who We Are!</span>
    <p>Bright Future Organization (GBFO) is a non-governmental organization, 
    aiming to empower secondary school girls living in rural areas in Tanzania. 
    We strive to create a community where all girls have access to quality 
    education, the essentials for safe periods, and are aware of their sexual and 
    reproductive health.The organization was formed in December 2021 
    and began actively working in January 2022.</p>
    </div>
    </div>
  )
}
