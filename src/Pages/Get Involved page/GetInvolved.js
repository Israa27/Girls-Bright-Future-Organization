import React from 'react'
import volunteer_image from '../../Assets/images/join_us.png';
import donate_image from '../../Assets/images/donate.png';
import join_us_image from '../../Assets/images/job.png';
import internship_image from '../../Assets/images/internship.png';
import './getInvolved.scss'
export default function GetInvolved() {
  const values=[{
    calss:'volunteer-box',
    header:`We make a living by what we get.
    We make a life by what we give.`,
    text:`Join us and together we make 
    the impact happens`,
    text_button:'Volunteer Now !',
    image:volunteer_image
  },
  {
    calss:'donate-box',
    text:`Help others without any reason and give 
    without the expectation of receiving 
    anything in return.`,
    text_button:'Donate Now !',
    image:donate_image

  },
  {
    calss:'internship-box',
    header:'Our Internships',
    image:internship_image

  },
  {
    calss:'join-us-box',
    header:'Join Us',
    image:join_us_image

  }
]
  return (
    <div class='get-involved'>
     <div className='get-involved-content'>
     {values.map((item,index)=>{
      return <div className={item.calss} key={index}>
      <div className='text'>
      <span>{item.header}</span>
      {item.calss==='internship-box' ||item.calss==='join-us-box'? false:
      <div>
      <p>{item.text}</p>
      <button>{item.text_button}</button>
      </div> }
      
      </div>
      <div className='image'>
         <img src={item.image} alt=''/>
       </div>
      </div>
     })}
     
     
   
     </div>
      
    </div>
  )
}
