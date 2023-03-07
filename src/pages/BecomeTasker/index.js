import React from 'react'
import Searches from './searches'
import AskTasker from './askTasker'
import GetStarted from './GetStarted'
import Banner from './banner'
import Personnels from './personnels'

export default function BecomeTasker() {
  return (
    <div className='py-4 '>
      <Searches />
      <AskTasker />
      <GetStarted />
      <Banner />
      <Personnels />


    </div>
  )
}
