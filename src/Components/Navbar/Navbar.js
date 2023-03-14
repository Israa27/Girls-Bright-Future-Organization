import React from 'react'
import Container from '../Container/Container'
import './navbar.scss'
import logo from '../../Assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  let navigate=useNavigate()
    let links=[
      {
      name:'home',
      link:'/'
    },
    {
      name:'about us',
      link:'/about_us'
    },
    {
      name:'our programs',
      link:'/our_programs'

    },
    {
      name:'get involved',
      link:'/get_involved'

    },{
      name:'blog',
      link:'/blogs'
    },
    {
      name:'contact us',
      link:'/contact'
    }]
  return (
    <div className='navbar'>
    <Container>
    <div className='flexbox'>
    <div className='logo'>
     <img src={logo} alt='' />
    </div>
    <div className='navbar-links'>
      <ul>
      
       {links.map(item=>{
        return <li onClick={()=>navigate(item.link)}>{item.name}</li>
       })}
       
      </ul>
      <button>donate</button>
    </div>
    </div>
    </Container>
    </div>
  )
}
