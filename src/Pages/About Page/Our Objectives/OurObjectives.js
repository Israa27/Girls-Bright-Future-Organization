import React from 'react'
import './ourObjectives.scss'
import image_1 from '../../../Assets/images/objectives_1.png'
import image_2 from '../../../Assets/images/objectives_4.png'
import image_3 from '../../../Assets/images/objectives_2.png'
import image_4 from '../../../Assets/images/objectives_6.png'
import image_5 from '../../../Assets/images/objectives_3.png'
import image_6 from '../../../Assets/images/objectives_5.png'
import figure from '../../../Assets/images/figure.svg'
export default function OurObjectives() {
  const values=[{
    text:'To provide sexual and reproductive health education to girls in primary and secondary schools living in rural areas.',
    image:image_1,
  },
  {
    text:'To reduce early pregnancies and marriages and stand against girls’ violence',
    image:image_2,
  },
  {
    text:'To ensure safe menstruation periods by providing necessary materials such as sanitary pads, particularly cotton reusable pads',
    image:image_3,
  },
  {
    text:'To provide mentorship to girls and inspire them to study hard and reach their goals',
    image:image_4,
  },
  {
    text:'To create awareness among parents and the broader community about the importance of education for girls.',
    image:image_5,
  },
  {
    text:'To provide mentorship to girls and inspire them to study hard and reach their goals',
    image:image_6,
  },
]
  return (
    <div className='our-objectives'>
    <div className='header-our-objectives'>
    <span>Our Objectives</span>
    <div className='figure'>
    <img src={figure} alt=''/>
    {values.map((item,index)=>{

      return<div className={` box item_${index}`} key={index}>
      <img src={item.image} alt=''/>
      <p>{item.text}</p>
      </div>
    })}
    </div>
    </div>
    </div>
  )
}
