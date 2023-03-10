import React from 'react'
import icon from "../../assests/icon.png"
import {BsFillGridFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {RiBuildingFill} from "react-icons/ri"

export default function TaskerNav() {
  return (
    <div className='flex flex-col w-full items-center space-y-10 absolute'>
            <main className='flex items-center justify-center w-full space-x-3' >
                    <div className='flex items-center '>
                        <img src={icon} className="w-5 h-8 "/>
                        <img src={icon}  className="w-5 h-8 "/>

                    </div>
                    <h5 className='text-lg font-bold text-color'>Homeaid</h5>
               </main>
              <main className='py-10'> 
               <div className='flex flex-col items-start w-full space-y-5'>
                  <h5 className='flex items-center space-x-2'>
                    <BsFillGridFill className='text-xl' style={{color: "#989B9E"}}/>
                    <span className='text-lg ' style={{color: "#989B9E"}}>Dashboard</span>

                  </h5>

                 <h5 className='flex items-center space-x-4'>
                    <RiBuildingFill   className='text-xl' style={{color: "#989B9E"}}/>
                    <span className='text-lg ' style={{color: "#989B9E"}}>Tasks</span>
                </h5>
                <h5 className='flex items-center space-x-4'>
                    <AiFillStar className='text-xl' style={{color: "#7536C6"}}/>
                    <span className='text-lg' style={{color: "#989B9E"}}>Reviews</span>

                </h5>

                <h5 className='flex items-center space-x-4'>
                    <MdEmail  className='text-xl' style={{color: "#989B9E"}}/>
                    <span className='text-lg ' style={{color: "#989B9E"}}>Messages</span>
                </h5>

                <h5 className='flex items-center space-x-4'>
                    <FiSettings  className='text-xl' style={{color: "#989B9E"}}/>
                   <span className='text-lg ' style={{color: "#989B9E"}}>Settings</span>
                </h5>
                   

               </div>
               </main>

    </div>
  )
}
