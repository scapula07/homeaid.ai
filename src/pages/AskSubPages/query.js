import React from 'react'
import LocationSearch from '../../components/inputFields/LocationSearch'
import SelectQueryCate from '../../components/inputFields/SelectQueryCate'
import {MdAdd} from "react-icons/md"



const QuerySection=()=>{

    return(
        <div className='flex flex-col items-center w-3/5 space-y-6'>
             <h5 className='text-lg font-semibold flex justify-start w-full' style={{color: "#252C32"}}>Enter your query</h5>
             <div className='flex flex-col items-center w-full space-y-8'>
                       <div className='w-full bg-white h-56  rounded-lg' style={{border: "1px solid #989B9E"}}>
                    

                        </div>
                        <div className='w-full bg-white h-28 flex items-center rounded-lg justify-center space-x-4' style={{border: "1px solid #989B9E"}}>
                                <button className='h-11 w-11 flex items-center justify-center rounded-xl ' style={{background: "#F5F5F5"}}>
                                    <MdAdd style={{color:" #7536C6"}}/>
                                </button>
                                <main className='w-3/4 h-11 rounded-xl px-8 py-2' style={{background: "#F5F5F5"}}>
                                     <input placeholder="Type here" className='w-9/12 h-full border-l px-4' style={{background: "#F5F5F5"}}/>
                                </main>
                                <button className='text-white text-sm px-4 py-1 flex items-center justify-center rounded-full ' style={{background: "#7536C6"}}>
                                  Query
                                </button>
                        </div>
             </div>
            

        </div>
    )
}

export default function Query() {
  return (
    <div className='py-20'>
        <div className='flex flex-col items-center space-y-16'>
            <p className='text-center w-1/2 text-sm' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
             
             <div className='flex w-full justify-cente w-3/5 space-x-20'>
                <div className='w-2/5'>
                    <LocationSearch />
                  
                </div>
            
                <div className='w-2/5'>
                   <SelectQueryCate />
                </div>
             </div>
        </div>
        
        <div className=' py-10 w-full flex justify-center'>
            <QuerySection />
        </div>
          

    </div>
  )
}
