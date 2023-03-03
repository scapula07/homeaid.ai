import React from 'react'
import icon from "../../assests/iconWhite.png"
import ellipse from "../../assests/ellipse1.svg"
import "./footer.css"

export default function Footer() {
  return (
    <div className=' relative w-full text-white h-footer'>
          <main className='flex  w-full justify-between'>
              <img src={ellipse} className="" style={{transform:"rotate(-30deg)"}}/>
              <img src={ellipse} className="" style={{transform:"rotate(-30deg)"}}/>

          </main>
          <div className=' absolute top-0 py-10  w-full '>
         <main className='flex lg:flex-row flex-col items-center  justify-center w-full items-center h-full'>
              
               <div className='flex items-center space-x-4 lg:w-1/4 w-full justify-center lg:justify-start'>
                    <main className='flex items-center'>
                        <img src={icon} className="lg:w-10 lg:h-16 w-8 h-14" />
                        <img src={icon} className="lg:w-10 lg:h-16 w-8 h-14"  />
                    </main>
                    <h5 className='text-lg font-bold text-white text-3xl '>Homeaid</h5>
  
                </div>
             
               <div className=' lg:px-8 px-2 grid grid-flow-row grid-cols-2  lg:grid-cols-4 gap-x-16 lg:gap-x-4  gap-y-14 py-8 lg:w-3/4'>
                     <main className='flex flex-col space-y-2 '>
                         <h5 className='text-lg font-bold'>Home</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                     </main>
                     <main className='flex flex-col space-y-2'>
                         <h5 className='text-lg font-bold'>About</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                     </main>
                     <main className='flex flex-col space-y-2'>
                         <h5 className='text-lg font-bold'>Ask Anything</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                         <h5 className='font-extralight'>Body text here</h5>
                     </main> 
                     <main className='flex flex-col space-y-2'>
                        <h5 className='text-lg font-bold'>Tasker</h5>
                        <h5 className='font-extralight'>Body text here</h5>
                        <h5 className='font-extralight'>Body text here</h5>
                        <h5 className='font-extralight'>Body text here</h5>
                        <h5 className='font-extralight'>Body text here</h5>
                     </main>
                
               </div>
   

         </main>

         </div>

        
    </div>
  )
}
