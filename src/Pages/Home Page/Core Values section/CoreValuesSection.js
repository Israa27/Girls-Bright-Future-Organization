import React from 'react'
import './core.scss'
import image_1 from '../../../Assets/images/image_3.png';
import image_2 from '../../../Assets/images/image_2.png';
import image_3 from '../../../Assets/images/image_4.png';
import image_4 from '../../../Assets/images/image_5.png';
export default function CoreValuesSection() {
    let values=[
        {
        header:'empowerment',
        text:'We are committed to empowering girls to realise and reach their dreams by creating a good environment for them to get a quality education, as well as developing confidence in every girl’s talent and capability.',
        image:image_1,
    },
    {
        header:'Respect',
        text:'We treat all people with dignity and respect. We value and understand different perspectives among the team. ',
        image:image_2,
    },
    {
        header:'Integrity',
        text:'We are reliable and loyal; we conduct our activities with honesty and transparency. We do the right things at the right time, and we keep promises by doing all that we promised. ',
        image:image_3,
    },
    {
        header:'Services',
        text:'We prioritize serving and fulfilling our responsibilities as servants in our community. We are passionate and committed to serving our community by providing our time, resources, and energy.',
        image:image_4,
    }
]
  return (
    <div className='core-section'>
    <span className='heading'>core values</span>
    <div className='box-content'>
    {values.map((item,index)=>{
        return(
            <div className='box'>
              <div className='image-box'>
               <img src={item.image} alt=''/>
              </div>
              <div className='text-box'>
              <span>{item.header}</span>
              <p>{item.text}</p>
              </div>
            </div>
        )
        })}
    </div>
      
    </div>
  )
}
