import React from 'react'
import Container from '../../Components/Container/Container'
import CoreValuesSection from './Core Values section/CoreValuesSection'
import HeaderSection from './Header section/HeaderSection'
import BlogSection from './Our blog section/BlogSection'
import OurMission from './Our mission section/OurMission'
import OurVision from './Our vision section/OurVision'

export default function Home() {
  return (
    <Container>
    <HeaderSection/>
    <OurMission/>
    <OurVision/>
    <CoreValuesSection/>
    <BlogSection/>
    </Container>
  )
}
