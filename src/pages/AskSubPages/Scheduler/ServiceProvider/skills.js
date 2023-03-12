import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col lg:w-4/5 w-full bg-white  px-6 py-10 rounded-xl space-y-4 '>
       <h5 className='text-lg font-semibold' style={{color: "#252C32"}}>Skills</h5>  
       <p className='text-center text-sm' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt</p>
       
       
    <div className='grid grid-flow-row lg:grid-cols-3 grid-cols-2 gap-4 py-10'>
                    {[1,2,3,4,5,6,7].map(()=>{
                        return(
                          <div className='rounded-full bg-slate-300 text-sm text-center py-2'>
                             <h5>Home repairs</h5>
                          </div>
                        )
                    })

                    }
                  
                </div>


       

    </div>
  )
}
