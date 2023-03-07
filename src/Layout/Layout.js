import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Pages/Home Page/Home';
import Blogs from '../Pages/Blogs page/Blogs';
import AboutUs from '../Pages/About Page/AboutUs';
import ContcatUs from '../Pages/Contcat page/ContcatUs';
import GetInvolved from '../Pages/Get Involved page/GetInvolved';
import { useLocation } from 'react-router-dom';
import './layout.scss'
export default function Layouts() {
  const location = useLocation()
  const renderContent = (routeName) => {
    console.log(routeName)
    switch (routeName) {
      case '/':
        return <Home />
      case '/blogs':
        return <Blogs/>
      case '/contcat':
        return <ContcatUs />
      case '/about_us':
        return <AboutUs />
      case '/get_involved':
        return <GetInvolved/>
      default:
        return <Home />
     
  }};
 // const error=useSelector(state=> state.product);

  return<div className='layout'>

      <Navbar />
 
        {renderContent(location.pathname)}

        
      <Footer />
    
    </div>
   

    }