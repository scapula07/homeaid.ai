import React from 'react'
import Searches from './searches'
import About from '../LandingPage/about'
import Personnels from './personnel'


export default function Ask() {
  return (
     <div className='py-4 px-8'>
        <Searches />

        <div className='bg-white py-4'>
        <About cname={"flex-row"}/>
        <About cname={"flex-row-reverse"}/>

        </div>
        <Personnels />

     </div>
  )
}
