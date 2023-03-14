import React from 'react'
import './card.scss'
import img from '../../Assets/images/image_2.jpeg'

export default function PostCard() {
  return (
    <div className='post-card'>
    <div className='image-post-card'>
    <img src={img} alt=''/>
    </div>
    <div className='tags-post-card'>
    <span>Volunteer</span>
    <span>School</span>
    </div>
      <div className='text-post-card'>
      <h4>Merya secondary School</h4>
      <p>Merya secondary School. Our team visited Merya Secondary school 
      in the Singida region. As part of the mentorship program, 
      we raised awareness about the girls’ right </p>
      </div>
    </div>
  )
}
