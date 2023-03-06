import React from 'react'
import { Outlet } from 'react-router-dom'
import ProgressBar from './progressBar'

export default function AskPages() {
  return (
    <div className='py-10 w-full'>
       
        <ProgressBar />

        <div>
           < Outlet />
        </div>

        

    </div>
  )
}
