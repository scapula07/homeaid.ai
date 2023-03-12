import React from 'react'
import provider from "../../../../assests/provider.png"

import {AiFillStar} from "react-icons/ai"
import {IoLocationOutline} from "react-icons/io5"
import { Outlet } from 'react-router-dom'


const Profile=()=>{
    return(
        <div className='flex flex-col w-full items-center space-y-10 px-6'>
             <main className='flex flex-col w-full items-center space-y-2'>
                   <img src={provider} className="w-20 h-20 rounded-full" />
                   <h5 className="text-base font-semibold" style={{color: "#252C32"}}>Lordswish Ugo</h5>
                   <p className='text-center text-sm w-full' style={{color: " #787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt</p>


                   <main className='flex flex-col space-y-4 '>
                      <main className='flex items-center space-x-8 '>
                          <h5 className='border-r px-1 text-xs' style={{borderRight: "1px solid #A1A1A1"}}>50$/hr</h5>
                          <h5  className='border-r px-1 text-center text-xs'  style={{borderRight: "1px solid #A1A1A1"}}>10 km</h5>
                                
                            <button className='flex items-center rounded-full px-1 py-0.5 space-x-0.5' style={{background: "rgba(255, 189, 57, 0.12)"}}>
                                <AiFillStar className='text-xs' style={{color: "#FFBD39"}} />
                                <span className='text-xs' style={{color: "#FFBD39"}}>4.9</span>
                            </button>
                            <h5 className='border-l px-1 text-center text-xs' style={{borderLeft: "1px solid #A1A1A1"}}>450 walks</h5>
                            <h5 className='border-l px-1 text-xs'  style={{borderLeft: "1px solid #A1A1A1"}}>30 yrs</h5>

                      </main>
                      <main className='flex items-center justify-center space-x-4'>
                           <h5 className='flex items-center space-x-1'>
                                <IoLocationOutline className='text-xl' style={{color: "#989B9E"}}/>
                                <span  className="text-sm" style={{color: "#989B9E"}}>Dublin</span>
                           </h5>
                           
                           <h5 className='text-sm' style={{color: "#989B9E"}}> <span>Joined 2023</span></h5>
                      </main>

                   </main>
             </main>
             <main className='flex items-center w-full justify-center space-x-8'>
                
                  <button className=' border px-6 py-2 rounded-full'  style={{borderColor:" #7536C6",color:"#7536C6"}}>Chat me</button>


             </main>
        </div>
    )
}


const Works=()=>{
    return(
        <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-2 gap-4 py-10'>
        {[1,2,3,4,5,6].map(()=>{
            return(
              <div className='rounded-full bg-slate-300 text-sm text-center py-2'>
                 <h5>Home repairs</h5>
              </div>
            )
        })

        }
      
    </div>





    )
}


const Payments=()=>{

    return(
        <div className='w-full px-8'>
            <h5 className='text-lg font-semibold' style={{color: "#0A0D13"}}>How do you want to pay? (Payment method)</h5>
            <hr></hr>
            <div className='flex flex-col py-8 space-y-2'>
                <h5 className='text-sm'>Select method</h5>
                <main className='flex items-center space-x-8'>
                    <h5 className='items-center flex space-x-2'>
                        <input type="radio" style={{color: "#ACACAC"}}/>
                        <span style={{color: "#ACACAC"}}>Cash</span>

                    </h5>
                    <h5 className='items-center flex  space-x-2'>
                        <input type="radio" style={{color: "#ACACAC"}}/>
                        <span style={{color: "#ACACAC"}}>Card</span>

                    </h5>
                    <h5 className='items-center flex  space-x-2'>
                        <input type="radio" style={{color: "#ACACAC"}} />
                        <span style={{color: "#ACACAC"}}>Transfer</span>

                    </h5>
                    

                </main>
            </div>

            <div className=''>
                <Outlet /> 

            </div>

        </div>
    )
}

export default function Booking() {
  return (
    <div className='py-20 px-8'>
        <main className='flex flex-col items-center px-4'>
            <div className='lg:bg-white flex lg:flex-row flex-col space-y-10 lg:space-y-0 rounded-lg lg:border lg:w-3/4  py-20'>
                   <main className='lg:border-r border lg:border-0 lg:w-1/2 w-full flex flex-col py-10 lg:py-0'>
                      <div>
                         <Profile />
                      </div>

                      <div className='px-4'>
                        <Works />

                      </div>

                       <div className='flex flex-col px-6 w-full space-y-8'>
                          <main className='flex flex-col w-11/12'>
                              <div className='flex flex-col '>
                                  <h5 className='text-base font-bold'>Your address</h5>
                                  <p className='text-sm ' style={{color: "#787878"}}>Plot 117 navy road by kiliman street opposite frontals</p>
                                 
                              </div>
                              <h5 className='w-full flex justify-end text-sm underline' style={{color: "#7536C6"}}>Change address</h5>
                           
                          </main>

                          <main className='flex flex-col w-full space-y-3'>
                              <div className='flex flex-col '>
                                  <h5 className='text-base font-bold'>Your address</h5>
                                  <p className='text-sm ' style={{color: "#787878"}}>Plot 117 navy road by kiliman street opposite frontals</p>
                                 
                              </div>
                              <div className='flex justify-between w-full   items-center space-x-6' >
                                 <main className='flex rounded-full w-2/5 px-2 py-2 space-x-4' style={{border: "0.668919px solid #7536C6"}}>
                                        <select placeholder='' style={{color: "#7536C6"}} className="outline-none text-xs" >
                                            <option value="volvo">12/04/23</option>
                                        </select>
                                        <select placeholder='' style={{color: "#7536C6"}} className="outline-none w-full text-xs" >
                                            <option value="volvo" >10am</option>
                                        </select>
                                 </main>

                              <h5 className='w-2/5 text-sm underline' style={{color: "#7536C6"}}>Change Schedule</h5>
                              </div>
                          </main>

                       </div>



                   </main>
                    <main className='lg:border-r border lg:border-0 lg:w-1/2 w-full flex flex-col py-10 lg:py-0'>
                        < Payments />
                    </main>

            </div>

        </main>
       

    </div>
  ) 
}
