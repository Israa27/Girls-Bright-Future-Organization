import React from 'react'
import './team.scss'
import member from '../../../Assets/images/team_1.jpg'
import member_2 from '../../../Assets/images/team_3.jpg'
import member_3 from '../../../Assets/images/team_2.jpg'
import member_4 from '../../../Assets/images/team_4.jpg'
export default function TeamMember() {
    let members=[{
        name:'Alexsandar Nick',
        facebook:'fab fa-facebook-f',
        twitter:'fab fa-twitter',
        linkedin:"fab fa-linkedin",
        image:member
    },{
    name:'Alexsandar Nick',
    facebook:'fab fa-facebook-f',
    twitter:'fab fa-twitter',
    linkedin:"fab fa-linkedin",
    image:member_2
},
{
    name:'Alexsandar Nick',
    facebook:'fab fa-facebook-f',
    twitter:'fab fa-twitter',
    linkedin:"fab fa-linkedin",
    image:member_3
},
{
    name:'Alexsandar Nick',
    facebook:'fab fa-facebook-f',
    twitter:'fab fa-twitter',
    linkedin:"fab fa-linkedin",
    image:member_4
}]
  return (
    <div className='team'>
    <div className='team-header'>
        <header>Our Awesome Team</header>
    </div>
    <div className='team-members'>
    {members.map((item,index)=>{
        return<div className='member' key={index}>
        <div className='social-icon'>
            <i class={item.facebook}></i>
            <i class={item.twitter}></i>
            <i class={item.linkedin}></i>
        </div>
            <img src={item.image} alt=''/>
            <button>{item.name}</button>
        </div>
    })}
        
        </div>
        </div>
  )
}
