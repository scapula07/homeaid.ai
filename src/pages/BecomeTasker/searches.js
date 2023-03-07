import React from 'react'
import bg from "../../assests/taskerBg.png"
import SearchBar from '../../components/inputFields/SearchBar.js'

export default function Searches() {
  return (
    <div className='w-full lg:py-12'>
        <div className='flex flex-col items-center w-full space-y-14' >
            <main className='flex flex-col lg:w-3/4 w-full  items-center lg:space-y-4 space-y-4'>
                <h5 className='text-black lg:text-5xl text-2xl font-bold text-center'>
                Make money as a blue collar service provider, get connected  to solve a home problem 
                </h5>
            
                <p className='text-sm text-center w-3/4' style={{color: "#787878"}}> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.
                </p>
             </main>

             <main  className='relative w-full ' style={{height:"582px"}}>
                  <div className='w-full h-full'>
                    <img src={bg} className="h-full w-full"/>

                  </div>
                    <div className='absolute z-30  w-full top-0 h-full bg '>
                        <div className='flex flex-col h-full items-center justify-center'>
                             <main className='w-3/5 h-full flex flex-col h-full items-center justify-center'>
                              <SearchBar />
                             </main>

                        </div>
                      
                    </div>
               

             </main>
            
        </div>
    </div>
  )
}
