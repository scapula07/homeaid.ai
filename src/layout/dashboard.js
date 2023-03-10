import React from 'react'
import TaskerNav from '../components/SideBar/taskerNav'
import DashboardHeader from '../components/DashboardHeader'

export default function Dashboard({children}) {
  return (

    <div className='flex w-full '>
        <div className='w-1/6  py-6  left-0 h-screen relative '> 
           <TaskerNav />
        </div>
        <div className='w-full h-screen'>
            < div className='w-full py-6  relative'>
                <DashboardHeader />

            </div>
            <div className='h-full overflow-y-scroll' style={{background:" #FAFAFA",height:"90vh"}}>
                {children}
            </div>

        </div>

       {/* {children} */}
    </div>
  )
}
