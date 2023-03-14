import React from 'react'
import './contcat.scss'
import img from '../../Assets/images/contcat.png'
export default function ContcatUs() {
  // values of form content 
  let formValues=[
    {label:'name',
     type:'text',

  },
    {
      label:'email',
      type:'email',
  },
   {
    label:'phone',
    type:'number',
  },
   {label:'state',
    type:'text',
  
  },
   {
    label:'How can we hlpe you',
    type:'textarea',
    placeholder:'write your message',
  },
   {
    label:'send message',
    type:'submit',
  },
  ]

  //linkes and main addresses
  let followUs={
    'facebook':"fab fa-facebook-f",
    'twitter ':'fab fa-twitter',
    'instagram':'fab fa-instagram-square',
    'linkedIn':'fab fa-linkedin-in',

  };
  let contcatUs={
    'fas fa-map-marker-alt':'Arusha , Tanzania', 
    'fas fa-phone-alt':'+255 769 533 006',
    'fas fa-phone-alt _':'+255 626 048 445' ,
    'fas fa-envelope':'info@girlsbrightfuture.org',
  };
  return (
    <div className='contcat'>
    <div className='left-side-form'>
    <span className='contcat-heading'>HOW CAN WE HELP?</span>
    <p>We're Always Ready to Serve you</p>
      <form className='contcat-from'>
      {formValues.map((item,index)=>{
        return (item.type==='submit'?<button>{item.label}</button>:item.type==='textarea'?
        <div className='textarea-form'>
        <label>{item.label}</label>
        <textarea placeholder={item.placeholder}></textarea>
        </div>:
        <div className='input-form' key={index}>
        <label htmlFor=''>{item.label}</label>
        <input type={item.type} />
        </div>
  )})}
    
      </form>
      <a href='/'>back to home page</a>
      </div>
      <div className='right-side'>
      <div className='contcat-image'>
      <img src={img} alt=''/>
      </div>
      
      {
        Object.entries(contcatUs).map((item,index)=>{
          return <div className='icon-form' key={index}>
          <i className={item[0]}></i>
          <span>{item[1]}</span>
          </div>
          
        })
        
      }
      
      <div className='social-media-form' >
        {Object.entries(followUs).map((item,index)=>{
          return <i className={item[1]} key={index}></i>
         
         
        })
      }
      </div>

      </div>
    </div>
  )
}
