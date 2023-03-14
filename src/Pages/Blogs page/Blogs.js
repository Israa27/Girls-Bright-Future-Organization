import React from 'react'
import PostCard from '../../Components/Card/PostCard'
import './blog.scss'
import Search from './Search input/Search'
import TopPosts from './Top Post/TopPosts'
import MainPost from './Main post/MainPost'
export default function Blogs() {
  return (
    <div className='blog-content'>
    <div className='row_1'>
      <MainPost/>
      <div className='col_2'>
        <Search/>
        <TopPosts/>
      </div>
    </div>
    <div className='row_2'>
    
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      </div>
    </div>
  )
}
