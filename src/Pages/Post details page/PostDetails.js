import React from 'react'
import './post.scss'
import img from '../../Assets/images/image_6.png'
import avatar from '../../Assets/images/image_7.jpeg'
import PostCard from '../../Components/Card/PostCard'
export default function PostDetails() {
  return (
    <div className='post-details'>
    <div className='post-details-content'>
     <img src={img} alt=''/>
    <h2>Students helping the Girls’ Bright Future team to unload the boxes
    of sanitary pads upon the arrival</h2>
    <p>The event was attended by the School Staff, a total of 495 students and 265 were girls, parent representatives, the Ward executive, the Village executive, Ward councilors, the former minister of natural resources and tourism Hon. Lazaro Nyalandu and other village leaders, Ms. Debora Benjamen, Executive Director of Girls' Bright Future Organization, and Ms. Linda Francis, member of the organization and AYO TV media team.</p>
    <p>
    Our event began with motivational speeches and Debora Benjamen opened the session by sharing her academic journey to encourage the girls. Having grown up in Merya village, she faced the same challenges as these young girls but she conquered the challenges and carried on with her career. She holds a Master's degree in Marine Sciences from Ghent University in Belgium and works as a Marine Scientist and Researcher. Furthermore, she emphasized the importance of setting goals, being disciplined, and working hard to achieve them.</p>
    <p>The other speakers, including former natural resources and tourism minister Lazaro Nyalandu, emphasized the importance of studying hard and following both the school's schedule as well as a personal schedule. In a nutshell, he explained the history of students' performance since the school was founded. Additionally, he urged parents to motivate their children to attend school and to work closely with their teachers in discussing their children's progress.</p>
    
    <div className='avatar'>
      <div className='image-avatar'>
      <img src={avatar} alt=''/>
      </div>
      <div className='text-avatar'>
      <h4>Mary Smith</h4>
      <span>October 25, 2021</span>
      </div>
    </div>
    </div>
    <div className='related-posts'>
    <h3>Related Posts</h3>
    <div className='cards'>
     <PostCard/>
     <PostCard/>
     </div>
    </div>
    </div>

  )
}
