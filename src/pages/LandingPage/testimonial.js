import React from 'react'
import testimonialImg from "../../assests/testimonal.png"
import {IoLocationOutline} from "react-icons/io5"




export default function Testimonial() {
  return (
    <div className='px-8 py-32'>
       <div className='flex flex-col w-full items-center space-y-4'> 

            <h5 className='text-2xl font-semibold' style={{color:"#7536C6"}}>Testimonials</h5>
            <h5 className='text-2xl font-semibold' style={{color: "#112B3C"}}>These are what our users say</h5>
             
             <p className='text-sm lg:w-3/4 text-center' style={{color: "#787878"}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.
             </p>


             <div className='flex flex-col px-4 lg:px-0 lg:flex-row w-full justify-center lg:space-x-10 space-y-8 lg:space-y-0 py-10'>
                  {[1,2,3].map(()=>{
                     return(
                        <TestimonialCard />
                     )
                  })

                  }


              </div>
       </div>

    </div>
  )
}



const TestimonialCard=()=>{

     return(
        <div className='bg-white lg:w-1/4 w-full h-80 shadow-lg  rounded-xl'>
             <div className='flex flex-col  items-center w-full py-8 space-y-6'>
                 <main className='flex flex-col items-center space-y-1'>
                     <img src={testimonialImg} className="rounded-full w-16 h-16" />
                      <div className='flex flex-col items-center'>
                         <h5 className='text-xl font-semibold'>Lordswish Ugo</h5>
                         <h5 className='flex items-center'>
                              <IoLocationOutline style={{color:"#989B9E"}} />
                              <span style={{color: "#989B9E"}}> Dublin</span>
                         </h5>

                      </div>
                 </main>
                 <main className="px-4 text-center text-sm"  style={{color: "#989B9E"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt


                 </main>
               
             </div>

        </div>
     )

}
