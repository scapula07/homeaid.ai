import React from 'react'
import {BiSearch} from "react-icons/bi"
import provider from "../../assests/provider.png"
import {IoLocationOutline} from "react-icons/io5"
import {AiOutlineClockCircle,AiOutlineCalendar} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"



const TaskCard=()=>{
    return(
        <div className='flex  w-10/12 justify-between border rounded-lg p-6' >
            <img src={provider} className="h-12 w-12 rounded-full "/>

        <div className='flex flex-col  w-10/12 space-y-2'>
            <div className='flex items-center justify-between '>
                
                 <main className='flex flex-col'>
                    <h5>Evelyn Lynch</h5>
                    <h5 className='text-lg font-semibold'>Leaking kitchen sink</h5>

                 </main>
                 
                 < main className='flex items-center space-x-4 '>
                    <button className='rounded-full px-4 text-xs text-white py-1' style={{background: "#FB724C"}}>Reject Task</button>
                    <button   className='rounded-full px-4 text-xs text-white py-1'  style={{background: "#A262F3"}}>Accept task</button>
                    
                 </main>
   
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <main className='flex space-x-4'>
                   <h5 className='flex items-center space-x-1'>
                      <IoLocationOutline />
                      <span className='text-sm font-light'> Dublin</span>
                   </h5>

                   <h5 className='flex items-center space-x-1'>
                      <AiOutlineClockCircle />
                      <span className='text-sm font-light'>10:00am </span>
                   </h5>

                   <h5 className='flex items-center space-x-1'>
                      <AiOutlineCalendar/>
                      <span className='text-sm font-light'>12/04/2023</span>
                   </h5>

                   <h5 className='flex items-center space-x-1'>
                      <BsCurrencyDollar/>
                      <span className='text-sm font-light'>Pay on delivery</span>
                   </h5>


                </main>

                <main className='text-sm text-sm font-light'>
                  “orem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur”“orem ipsum dolor sit amet, consectetur adipiscing elit. 
                </main>


            </div>

        </div>
        </div>
    )
}

export default function Tasks() {
  return (
    <div className='px-4 h-full flex flex-col space-y-10'>
         <div className='flex w-full items-center justify-between'>
             <h5 className='text-lg font-semibold'>Tasks(5)</h5>
              
             <div className='border flex items-center w-2/5 py-2 px-4 space-x-4 rounded-lg'>
                <BiSearch  className='text-slate-300 text-xl'/>

                <input className='outline-none text-slate-500' placeholder='Search'/>
            </div>

         </div>

         <div className='h-5/6  w-full overflow-y-scroll flex flex-col items-center space-y-8'>
            {[1,2,3,4,5].map(()=>{
                return(
                   < TaskCard />
                )
            })

            }
           

         </div>


    </div>
  )
}
