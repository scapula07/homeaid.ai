import React from 'react'
import HeroSection from './heroSection'
import Banner from './banner'
import "./landing.css"
import Steps from './steps'
import About from './about'
import Category from './category'
import Testimonial from './testimonial'


export default function LandingPage() {
  return (
    <div className='w-full' >
      <HeroSection />
      <Banner />
      <div className='py-8' style={{background:"white"}}>
      <Steps />
      <About />
      </div>
      <Category />
      <Testimonial />
        
    </div>
  )
}
