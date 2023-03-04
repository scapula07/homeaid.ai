import React from 'react'
import testimonialImg from "../../assests/testimonal.png"
import {AiFillStar} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"


const PersonnelCard=()=>{
    return(
        <div className='bg-white  text-black shadow-lg rounded-lg py-8' style={{height: "401px"}}>
            <main className='flex flex-col w-full items-center space-y-4'>
                  <img src={testimonialImg} className="rounded-full w-16 h-16" />
                  <h5 className='flex flex-col items-center'>
                     <span className='text-xl font-semibold'>Lordswish Ugo</span>
                     <span className='text-sm font-light'>orem ipsum dolor sit amer...</span>
                  </h5>

                  <button className='flex items-center rounded-full px-1 py-0.5 space-x-0.5' style={{background: "rgba(255, 189, 57, 0.12)"}}>
                  <AiFillStar className='text-xs' style={{color: "#FFBD39"}} />
                      <span className='text-xs' style={{color: "#FFBD39"}}>4.9</span>
                  </button>

                  <div className='w-full'>
                      <main className='w-full flex-col items-center flex space-y-10'>
                        <ul className='text-sm ' style={{color: "#787878"}}>
                                <li className='flex items-center space-x-1'>
                                    <BsDot />
                                    <span> Home repairs</span>
                                </li>
                                <li className='flex items-center space-x-1'>
                                    <BsDot />
                                    <span>Kitchen</span>
                                </li><li className='flex items-center space-x-1'>
                                    <BsDot />
                                    <span>Furniture</span>
                                </li>  
                        </ul>

                         <div className='flex w-full items-center justify-between justify-center px-4'>
                            <h5 className='flex items-center space-x-1'>
                                <IoLocationOutline className='text-xl' style={{color: "#989B9E"}}/>
                                <span  className="text-sm" style={{color: "#989B9E"}}>Dublin</span>

                            </h5>

                            <h5 className='flex items-center  space-x-4'>
                                <span className='text-2xl font-semibold' style={{color: "#7536C6"}}>$150</span>
                                <span className='text-xs ' style={{color: "#989B9E"}}>Per city</span>
                                
                           </h5>

                        </div>

                      </main>

                  </div>

                 

            </main>

        </div>
    )
}

export default function Personnels() {
  return (
    <div className='py-20'>
        <div className='flex flex-col items-center space-y-10'>
            <h5 className="text-2xl font-semibold text-center lg:text-start" style={{color: "#112B3C"}}>
              We connect you with best personnel
            </h5>

            <main className='grid grid-flow-row lg:grid-cols-3 gap-8 w-4/5'>
               {[1,2,3,4,5,6,7,8,9].map(()=>{
                  return(
                        <PersonnelCard />
                  )
               })

               }
            </main>

             <main className='py-4'>
                 <button className='text-white rounded-full px-8  py-4' style={{background: "#7536C6"}}>Start asking</button>
             </main>

        </div>
    </div>
  )
}
