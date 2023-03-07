import React from 'react'
import './header.scss';
import img from '../../../Assets/images/image_1.JPG'
export default function HeaderSection() {
  return (
    <div className='header' >
      <div className='text-header'>
      <h1>Bright Future<br/> 
      Organization</h1>
      <p>GBFO is a non-governmental organization,<br/>
      aiming to empower secondary school girls <br/>
      living in rural areas in Tanzania.</p>
      <button>read more</button>
      </div>
      <div className='header-image'>
      <img src={img} alt=''/>
      </div>
    </div>
  )
}
