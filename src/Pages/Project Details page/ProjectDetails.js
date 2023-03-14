import React from 'react'
import './project.scss'
import img from '../../Assets/images/image_2.jpeg'
import { useNavigate } from 'react-router-dom'
export default function ProjectDetails() {
    let navigate=useNavigate()
  return<div className='project-details-content'>
    <div className='box-content'>
      <div className='header-project-details'>
      <img src={img} alt=''/>
      </div>
      <div className='text-project-details'>
    <h3>Build Her confidence through the provision
    of Sanitary pads</h3>
    <p>We provide mentorship programs for secondary school girls to help 
    them realize their dreams and motivate them to work toward their success.
     A key aspect of our program is establishing Girls' clubs, which provide a platform 
     for secondary school girls to discuss their issues, study together, encourage one another to study hard, and stand
     against violence. These clubs are sources of motivation for the girls, and they have different motivational names such as Better 
     Together, Dream Chasers, Life Champions, Extraordinary, and Greatness Achievers. In the wake of the formation of these clubs, many girls are motivated and 
     inspired to pursue their dreams.</p>
    <p>We provide them with motivational speeches from different successful 
    people in careers and motivational speakers, as well as tips for staying 
    consistent in their studies and passing their exams. 
    We teach them how to set goals and how to achieve them. 
    Also, we do follow-ups to make sure they are progressing, i
    mproving sexual reproductive health, 
    to surpasses the social-cultural barrier and performing well in school, 
    as reports show that there are many school dropouts for girls in many rural 
    areas due to a variety of factors including child marriages, early 
    pregnancies, and lack of school materials due to extreme poverty. 
    Furthermore, we provide uniforms, exercise books, pens, pencils, and other 
    school supplies to students from extremely poor families.</p>
    </div>
    </div>
    <button onClick={()=>navigate('/our_programs')}>Back to Our Projects page</button>
    </div>
  
}
