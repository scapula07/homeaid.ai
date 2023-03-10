import React from 'react'
import {BiSearch} from "react-icons/bi"
import provider from "../../assests/provider.png"
import {IoLocationOutline} from "react-icons/io5"
import {AiOutlineClockCircle,AiOutlineCalendar} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"




const SectionCard=({number,name})=>{
    return(
       <div className='flex flex-col w-2/5 h-40 items-center py-4 space-y-4 rounded-xl' style={{background: "#FAFAFA"}}>
            <h5 className='font-semibold'>{number}</h5>
            <h5 className='font-light' style={{color: "#5321CA"}}>{name}</h5>

            <select className='border py-1 px-1 text-xs outline-none' style={{color: "#979699"}}>
                <option>12/04/2023</option>
            </select>
       </div>  
    )
}


const TaskCard=()=>{
    return(
        <div className='flex  w-full justify-between border rounded-lg p-6' style={{background: "#FAFAFA"}} >
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


export default function Overview() {
  return (
     <div className='px-4 w-full h-full'>
        <div className='flex flex-col w-full h-full space-y-8'>
             <div className='flex items-center space-x-4 w-full'>
                 <SectionCard number={"$50,000"} name="Total income" />
                 <SectionCard number={"10000"}  name="Total tasks"/>
                 <SectionCard  number={"150"}  name="Pending tasks"/>
             </div>
             <div className='w-full h-full overflow-y-scroll flex flex-col space-y-10'>
                 {/* <div></div> */}
                 <div className='py-4 w-full h-96 px-4 rounded-lg' style={{background: "#FAFAFA"}}>
                      <h5 className='text-base font-semibold' style={{color: "#23005B"}}>Income Breakdown</h5>

                      <div className='flex w-full items-center justify-between py-4' >
                        <h5 style={{color: "#23005B"}}>Total Revenue</h5>
                        <main className='flex items-center space-x-4'>
                            <h5 className='flex items-center space-x-2'>
                                <input type="radio" />
                                <span className='font-light'>Earned</span>

                            </h5>
                            <h5 className='flex items-center space-x-2'>
                                <input type="radio" />
                                <span className='font-light'>Forcasted</span>

                            </h5>

                          
                            <select className='border py-1 px-1 text-xs outline-none' style={{color: "#979699"}}>
                                <option>6 months</option>
                            </select>
                        </main>

                     

                      </div>
                      <div className='h-20'>

                        </div>


                        
                </div>

                  <div className='w-full flex flex-col space-y-4' >
                             {[1,2].map(()=>{
                                return(
                                    <TaskCard />
                                )
                             })

                             }

                        </div>

             </div>
        </div>



     </div>
  )
}
