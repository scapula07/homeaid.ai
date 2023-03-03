import React from 'react'
import aboutImg from "../../assests/about.png"


export default function About() {
  return (
    <div className='lg:py-32 px-8 '>
        <div className='flex lg:flex-row flex-col-reverse justify-center  lg:space-x-20 py-20 gap-y-12'>
            <img src={aboutImg} className="w-96 w-1/2" />

            <main className='flex flex-col justify-center lg:w-1/2 w-full space-y-6'>
                <div className='flex flex-col items-center lg:items-start'>
                     <h5 className='text-2xl font-semibold' style={{color: "#7536C6"}}>About us</h5>
                     <h5 className='text-2xl font-semibold text-center lg:text-start' style={{color:"#112B3C"}}>This is who we are and what we do</h5>

                </div>
                <div className='flex flex-col space-y-6 items-center lg:items-start'>
                    <p className='font-light text-sm lg:pr-8 text-center lg:text-start' style={{color: "#787878"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      <br></br>
                      Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. 
                    </p>

                    <button className="rounded-full py-2 px-4 w-48 h-16 text-white" style={{backgroundColor:"#7536C6"}}>Start asking</button>

                     
                </div>

            </main>




        </div>
     </div>
  )
}
