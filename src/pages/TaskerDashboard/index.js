import React from 'react'
import { Outlet } from 'react-router-dom'

export default function TaskerDashboard() {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        
        <div className='w-11/12 bg-white h-full p-8 rounded-lg' style={{height:"91%"}}>
          
          <Outlet />
        </div>


    </div>
  )
}
