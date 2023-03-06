import React from 'react'
import {BiSearch} from "react-icons/bi"
import {IoLocationOutline} from "react-icons/io5"


export default function SearchBar() {
  return (
    <div className='flex items-center border   rounded-full h-16 w-full space-x-4'>
        <main className='flex items-center w-3/5 space-x-2 px-4'>
            <BiSearch className='text-xl ' style={{color: "#989B9E"}}/>
            <input placeholder='What problem are you facing at home?' className='w-11/12 text-sm outline-none text-slate-500'/>
        </main>
         <main className='flex items-center w-1/5 px-2 justify-center border-l border-r'> 
             <IoLocationOutline style={{color: "#989B9E"}}/>
 
            <select placeholder='' style={{color: "#989B9E"}} >
            <option value="volvo">Location</option>
            </select>
        </main>
         <main className='h-full flex justify-end '>
         <button className='bg-color rounded-full  text-white w-48 h-full'>Search</button>
         </main>
    </div>
  )
}
