import React from 'react'
import './main.scss'
import img from '../../../Assets/images/image_6.png'
export default function MainPost() {
  return (
    <div className='main-post'>
    <div className='image-main-post'>
    <img src={img} alt=''/>
    </div>
    <div className='text-main-post'>
    <span>Students helping the Girls
    Bright Future team</span>
    </div>
      
    </div>
  )
}
