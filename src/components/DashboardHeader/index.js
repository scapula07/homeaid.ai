import React from 'react'
import {BiSearch} from "react-icons/bi"
import {RiNotification3Fill} from "react-icons/ri"
import provider from "../../assests/provider.png"

export default function DashboardHeader() {
  return (
    <div className='flex w-full justify-between px-10  '>
        <main className='w-1/2'>
            <div className='border flex items-center w-3/4 py-2 px-4 space-x-4 rounded-lg'>
                <BiSearch  className='text-slate-300 text-xl'/>

                <input className='outline-none text-slate-500' placeholder='Search'/>

            </div>

        </main>
         <main className='w-1/2 flex justify-end '>
             <div className='flex items-center space-x-4'>
                <RiNotification3Fill  className='text-slate-500 text-xl'/>
                <img src={provider} className="h-12 w-12 rounded-full" />

            </div>


        </main>

    </div>
  )
}
