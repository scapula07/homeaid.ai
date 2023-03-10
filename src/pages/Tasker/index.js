import React from 'react'
import { Outlet } from 'react-router-dom'
import ProgressBar from './progressBar'
import bg from "../../assests/taskerBg.png"


export default function Tasker() {
  return (
    <div className=' py-20 w-full flex justify-center'>      
       
       <div className=' bg-white w-11/12 px-8 py-10 rounded-xl'> 
           <ProgressBar />

            <div>
            < Outlet />
            </div>

     </div>

    </div>
  )
}
