import React from 'react'
import './blog.scss';
import blog_image from '../../../Assets/images/blog.png'
export default function BlogSection() {
  return (
    <div className='blog-section'>
      <div className='blog-text'>
      <span className='heading'>our blog</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud </p>
      <button>read more</button>
      </div>
      <div className='blog-image'>
      <img src={blog_image} alt=''/>
      </div>
    </div>
  )
}
