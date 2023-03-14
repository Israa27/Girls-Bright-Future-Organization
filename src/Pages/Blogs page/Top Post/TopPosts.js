import React from 'react'
import { useNavigate } from 'react-router-dom'
import './topPost.scss'
export default function TopPosts() {
    const navigate=useNavigate()
  return (
    <div className='top-post-card'>
      <h4>top Posts</h4>
      {[1,2,3].map((item,index)=>{
        return<div className='text-top-post-card' key={index}>
         <span onClick={()=>navigate('/post_details')}>Merya secondary School</span>
         <p>Our team visited Merya Secondary school 
         in the Singida region</p>
        {index!==([1,2,3].length)-1?<hr/>:''}
      
      </div>
    })}
    </div>
  )
}
