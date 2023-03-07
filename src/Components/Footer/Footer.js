import React from 'react'
import Container from '../Container/Container'
import './footer.scss'
export default function Footer() {
    let followUs={
      'header':'follow us',
      'facebook':"fab fa-facebook-f",
      'twitter ':'fab fa-twitter',
      'instagram':'fab fa-instagram-square',
      'linkedIn':'fab fa-linkedin-in',

    };
    let contcatUs={
      'header':'contcat us',
      'fas fa-map-marker-alt':'Arusha , Tanzania', 
      'fas fa-phone-alt':'+255 769 533 006',
      'fas fa-phone-alt _2': '+255 626 048 445 ',
      'fas fa-envelope':'info@girlsbrightfuture.org',
    };
    let quikLinks={
      'header':'quik links',
      'link_1':'Who we are',
      'link_2':'Donate' ,
      'link_3':'Get Involved' ,
      'link_4':'Our programs',
      'link_5':'Blog',
    };
    let Subscribe={
      'header':'Subscribe',
      'first_name':'first name',
      'last_name':'last name',
      'email':'eamil',
      'submit':'submit',

    }

  
  return (
    <div className='footer'>
      <Container>
      <div className='grid'>
      <div className='follow-us'>
      {Object.entries(followUs).map(item=>{
        return(
        item[0]==='header'?
        <h5>{item[1]}</h5>:<i className={item[1]}></i>
        )
      })}
      </div>
      <div className='contcat-us'>
      {Object.entries(contcatUs).map(item=>{
        return(
        item[0]==='header'?<h5>{item[1]}</h5>:<div className='icon-links'>
        <i className={item[0]}></i>
        <span>{item[1]}</span>
        </div>
        )
        })}
      </div>
      <div className='quik-links'>
      {Object.entries(quikLinks).map(item=>{
        return(
        item[0]==='header'?<h5>{item[1]}</h5>:
        <span>{item[1]}</span>
        
        )
        })}
      </div>
      <div className='subscribe-form'>
      <form>
      {Object.entries(Subscribe).map(item=>{
        return(
        item[0]==='header'?
        <h5>{item[1]}</h5>:item[0]==='submit'?<button>{item[1]}</button>:<input type='text' placeholder={item[1]} />
        )
      })}
      </form>
      </div>
      </div>
      <p>Copyright © 2022 Girls Bright Future. All Rights Reserved.</p>
      </Container>
    </div>
  )
}
