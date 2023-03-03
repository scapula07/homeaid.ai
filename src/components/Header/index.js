import React from 'react'
import icon from "../../assests/icon.png"
import "./header.css"

export default function Header() {
  return (
    <div className='w-full white'>
         <div className='flex items-center w-full justify-between'>
               <main className='flex items-center space-x-3' >
                    <div className='flex items-center '>
                        <img src={icon} className="w-5 h-8 "/>
                        <img src={icon}  className="w-5 h-8 "/>

                    </div>
                    <h5 className='text-lg font-bold text-color'>Homeaid</h5>
               </main>
               <main className='hidden  lg:flex text-color-sm text-lg font-normal items-center space-x-8'>
                  <h5>Home</h5>
                  <h5>About</h5>
                  <h5>Ask</h5>
                  <h5>Become Tasker</h5>


               </main>
               <main className='hidden  lg:flex items-center space-x-4'>
                  <h5 className='text-lg font-normal' style={{color:" #808080;"}}>Login</h5>
                  <button className='bg-color px-4 py-2 text-white rounded-full  '>Create account</button>

               </main>
         </div>
    </div>
    )
}
