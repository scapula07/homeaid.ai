import React from 'react'
import step1 from "../../assests/step1.png"
import step2 from "../../assests/step2.png"
import step3 from "../../assests/step3.png"
import aboutImg from "../../assests/taskerImg.png"



export default function GetStarted() {
  return (
    <div className='w-full px-8 py-20'>
        <div className='flex w-full items-center '>
              <div className='flex flex-col w-1/2 items-center'>

              <div className='flex flex-col items-center w-1/2 space-y-8'>
                  <main className='flex flex-col '>
                     <img src={step1} className="w-16" />

                     <div className='flex flex-col space-y-2'>
                         <h5 className='font-semibold' style={{color: "#09182C"}}>Enter problem</h5>
                         <p className='text-sm  font-light  '>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                         </p>

                     </div>

                   </main>
                  <main className='flex flex-col '>
                      <img src={step2} className="w-16"/>
                      
                       <div className='flex flex-col  space-y-2' > 
                             <h5 className='font-semibold' style={{color: "#09182C"}}>Get quick help</h5>
                             <p className='text-sm  font-light '>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                           </p>

                        </div>
                  </main>
                  <main className='flex flex-col '>
                        <img src={step3} className="w-16"/>
                        
                        <div className='flex flex-col  space-y-2'>
                            <h5 className='font-semibold' style={{color: "#09182C"}}>See service provider</h5>

                        <p className='text-sm font-light ' >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                         </p>

                        </div>




                  </main>



            </div>


              </div>
              <div className='w-1/2'>
                 <img src={aboutImg} className="w-4/5" />

              </div>



       </div>

    </div>
  )
}
