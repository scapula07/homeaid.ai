import React from 'react'
import { Outlet } from 'react-router-dom'
import ProgressBar from './progressBar'

export default function AskPages() {
  return (
    <div className='py-10 w-full'>
        <div className='w-full overflow-x-scroll lg:overflow-x-hidden'>
        <ProgressBar />
        </div>

        <div>
           < Outlet />
        </div>

        

    </div>
  )
}
