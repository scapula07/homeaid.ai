import React from 'react'
import provider from "../../../../assests/provider.png"
import work1 from "../../../../assests/work1.png"
import work2 from "../../../../assests/work2.png"
import {AiFillStar} from "react-icons/ai"
import {IoLocationOutline} from "react-icons/io5"
import { Link, Outlet } from 'react-router-dom'


const Profile=()=>{
    return(
        <div className='flex flex-col w-full items-center space-y-10'>
             <main className='flex flex-col w-full items-center space-y-2 '>
                   <img src={provider} className="lg:w-52 lg:h-52 w-36 h-36 rounded-full" />
                   <h5 className="text-lg font-semibold" style={{color: "#252C32"}}>Lordswish Ugo</h5>
                   <p className='text-center lg:text-sm text-xs lg:w-1/2 w-full' style={{color: " #787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt</p>


                   <main className='flex flex-col space-y-4 '>
                      <main className='flex items-center lg:space-x-8 space-x-6 w-full'>
                          <h5 className='border-r px-2 text-xs lg:text-base' style={{borderRight: "1px solid #A1A1A1"}}>50$/hr</h5>
                          <h5  className='border-r lg:px-2 px-1 lg:text-center text-xs lg:text-base'  style={{borderRight: "1px solid #A1A1A1"}}>10km</h5>
                                
                            <button className='flex items-center rounded-full px-1 py-0.5 space-x-0.5' style={{background: "rgba(255, 189, 57, 0.12)"}}>
                                <AiFillStar className='text-xs' style={{color: "#FFBD39"}} />
                                <span className='text-xs' style={{color: "#FFBD39"}}>4.9</span>
                            </button>
                            <h5 className='border-l px-2 text-center text-xs lg:text-base' style={{borderLeft: "1px solid #A1A1A1"}}>450walks</h5>
                            <h5 className='border-l px-2 text-xs lg:text-base'  style={{borderLeft: "1px solid #A1A1A1"}}>30yrs</h5>

                      </main>
                      <main className='flex items-center justify-center space-x-4'>
                           <h5 className='flex items-center space-x-1'>
                                <IoLocationOutline className='text-xl' style={{color: "#989B9E"}}/>
                                <span  className="text-base" style={{color: "#989B9E"}}>Dublin</span>
                           </h5>
                           
                           <h5 className='text-base' style={{color: "#989B9E"}}> <span>Joined 2023</span></h5>
                      </main>

                   </main>
             </main>
             <main className='flex items-center w-full justify-center space-x-8'>
                 <Link to="/ask-/scheduler-booking"><button className='text-white px-10 py-4 rounded-full lg:text-base text-sm w-36 h-16 lg:w-44' style={{background:" #7536C6"}}>Book me</button></Link> 
                 <Link to=""> <button className=' border px-10 py-4 px-8 rounded-full lg:text-base text-sm w-36 h-16 lg:w-44'  style={{borderColor:" #7536C6",color:"#7536C6"}}>Chat me</button> </Link>


             </main>
        </div>
    )
}


const MidSection=()=>{
    return(
        <div className='flex flex-col w-full items-center space-y-10 '>
            <main className='flex items-center w-full justify-center space-x-8 overflow-x-scroll' style={{width:"200%"}}>
                  <button className='border px-4 py-1 text-sm rounded-full' >Skills</button>
                  <button className=' border px-4 py-2  text-sm rounded-full'  >Schedule Ugo</button>
                  <button className=' border px-4 py-2 text-sm  rounded-full' >Reviews</button>
            </main>

            <main className='w-full flex justify-center'>
                <Outlet />
            </main>

            

        </div>
    )
}


const Works=()=>{

    return(
        <div className='flex flex-col lg:w-4/5 w-full space-y-10'>
             <main className='prev flex flex-col space-y-4'>
               <h5 className='font-semibold text-lg' style={{color: "#252C32"}}>Previous works </h5>
                <p className='text-sm ' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur </p>
               
                <main className='ref flex justify-center overflow-y-scroll border bg-white py-8 px-4 rounded-lg' style={{height:" 520px"}}>
                 <div className='grid grid-flow-row lg:grid-cols-2 gap-x-4   ' >
                    { works.map((work)=>{
                         return(
                            <div className='flex flex-col w-full space-y-2'>
                                <img  src={work.img}  className="w-full rounded-lg h-44 " />
                                <h5 className='text-lg font-bold'>{work.name}</h5>
                            </div>
                         )
                    })

                    }
                      
                 </div>
               
             </main>
 
             </main>

             <main className='prev flex flex-col space-y-4'>
               <h5 className='font-semibold text-lg' style={{color: "#252C32"}}>Reference video </h5>
                <p className='text-sm ' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur </p>
                
                <div className='py-4 w-full'>
                    <img src={work2} className="w-full h-72 rounded-lg"/>
                </div>

             </main>
            

        </div>
    )
}

export default function ServiceProvider() {
  return (
    <div className='py-20 px-8'>
        <div className='flex flex-col items-center space-y-16'>
            <p className='text-center lg:w-1/2 text-sm' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
             


             <div className='flex   w-full justify-center py-10'>
                  <div className='flex flex-col lg:w-3/5  space-y-10'>
                     <Profile />

                     <hr></hr>
                     < MidSection />
                      <div className='flex justify-center'>
                        <Works />
                      </div>
                    

                  </div>

                   

             </div>
        </div>

    </div>
  )
}




const works=[
    {
        img:work1,
        name:"Leaking roof"
    },
    {
        img:work2,
        name:"Leaking kitchen"
    },
    {
        img:work1,
        name:"Leaking roof"
    },
    {
        img:work2,
        name:"Leaking kitchen"
    }


]