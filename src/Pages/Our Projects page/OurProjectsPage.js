import React from 'react'
import './ourProjects.scss'
import logo from '../../Assets/images/programs.png'
import Container from '../../Components/Container/Container'
import image from '../../Assets/images/image_2.jpeg'
import { useNavigate } from 'react-router-dom'
export default function OurProjectsPage() {
  let navigate=useNavigate()
  return (
    <div className='our_projects_content'>
   
    <div className='header'>
    <div className='project_header_image'>
      <img src={logo} alt=''/>
    </div>
    <span>OUR PROJECTS</span>
    </div>
    <div className='projects_list'>
    {[1,2,3,4].map((item)=>{
    return <div className='project-card'>
    <div className='text-project-card' key={item}>
    <h3>Build Her confidence through the provision
    of Sanitary pads</h3>
    <p>we realized that the lack of sanitary pads was one of the biggest 
    problems facing the school girls and that many did not attend classes 
    during menstrual days and lost self-esteem</p>
    <button onClick={()=> navigate('/program_details')}>read more</button>
    </div>
    <div className='image-project-card'>
    <img src={image} alt=''/>
    </div>
    </div>
})}
    </div>
    
    </div>
    
  )
}
