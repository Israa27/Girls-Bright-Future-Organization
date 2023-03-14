import React from 'react'
import OurObjectives from './Our Objectives/OurObjectives'
import TeamMember from './Our team/TeamMember'
import WhoWeAreSection from './Who we are/WhoWeAreSection'

export default function AboutUs() {
  return (
    <div className='about-us-content'>
    <WhoWeAreSection/>
    <OurObjectives/>
      <TeamMember/>
    </div>
  )
}
