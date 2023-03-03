import React from 'react'
import step1 from "../../assests/step1.png"
import step2 from "../../assests/step2.png"
import step3 from "../../assests/step3.png"


export default function Steps() {
  return (
    <div className='w-full px-8'>
        <div className='flex flex-col w-full items-center space-y-10'>
            <h5 className='text-2xl font-semibold ' style={{color: "#020D37"}}>How it works</h5>
            
            <div className='flex lg:flex-row flex-col items-center space-y-20 lg:space-y-0 py-10 lg:py-0 lg:space-x-8'>
                  <main className='flex flex-col items-center'>
                     <img src={step1} className="w-16" />

                     <div className='flex flex-col items-center space-y-2'>
                         <h5 className='font-semibold' style={{color: "#09182C"}}>Enter problem</h5>
                         <p className='text-sm text-center font-light px-2'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                         </p>

                     </div>

                   </main>
                  <main className='flex flex-col items-center'>
                      <img src={step2} className="w-16"/>
                      
                       <div className='flex flex-col items-center space-y-2' > 
                             <h5 className='font-semibold' style={{color: "#09182C"}}>Get quick help</h5>
                             <p className='text-sm text-center font-light px-2'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                           </p>

                        </div>
                  </main>
                  <main className='flex flex-col items-center'>
                        <img src={step3} className="w-16"/>
                        
                        <div className='flex flex-col items-center space-y-2'>
                            <h5 className='font-semibold' style={{color: "#09182C"}}>See service provider</h5>

                        <p className='text-sm text-center font-light px-2' >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                         </p>

                        </div>




                  </main>



            </div>
        </div>

    </div>
  )
}
