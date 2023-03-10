import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Settings() {
  return (
    <div  className='px-4 w-full h-full flex justify-center'>
       <div className='w-full'>
            <main className='flex items-center  justify-between w-4/5'>
              <h5 className='text-base font-semibold text-slate-500'>
                  PROFILE
              </h5>
              <h5  className='text-base font-semibold text-slate-500'>
                  SCHEDULE
              </h5>
              <h5  className='text-base font-semibold text-slate-500'>
                  SKILLS    
              </h5>

            </main>

            <main className='h-full w-full'>
              <Outlet />
            </main>

        </div>

    </div>
  )
}
