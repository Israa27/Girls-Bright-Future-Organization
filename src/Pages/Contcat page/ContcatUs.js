import React from 'react'

export default function ContcatUs() {
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
        <label>{item.label}</label>
        <input type={item.type} />
        </div>
  )})}
      </form>
      </div>
    </div>
  )
}
