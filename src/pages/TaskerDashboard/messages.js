import React from 'react'
import provider from "../../assests/provider.png"
import {RxDotFilled} from "react-icons/rx"
import {IoCallSharp} from "react-icons/io5"


const MessageTag=()=>{
    return(
        <div className='flex items-center justify-between w-full border-b pb-4'>
            <main className='flex space-x-4'>
                <img src={provider} className="h-12 w-12 rounded-full"/>
                <div className='flex flex-col'>
                    <h5 className='text-lg font-semibold'>Lordswish Ugo</h5>
                    <p className='text-sm font-light'>
                      Hey when are you coming
                    </p>

                </div>

            </main>
            <RxDotFilled className='text-xl' style={{color:"#A262F3"}}/>

        </div>
    )
}

export default function Messages() {
  return (
    <div  className='px-4 h-full w-full '>
        <div className='flex w-full h-full'>
            <main className='h-full w-2/5 p-4' style={{background: "#FAFAFA"}}>
              <h5 className='text-lg font-semibold'>Messages(15)</h5>
              <div  className='h-full w-full overflow-y-scroll space-y-10 py-10'>
                {[1,2,3,5,6,8,9,2].map(()=>{
                     return(
                        <MessageTag />
                     )
                })

                }

              </div>
 
            </main>
             <main className='h-full w-3/5 overflow-y-scroll flex justify-center'>
                 <div className=' w-4/5 h-full'>
                    <div className='flex items-center justify-between'>
                        <main className='flex space-x-4'>
                            <img  src={provider} className="h-14 w-14"/>
                            <div className='flex flex-col'>
                                <h5 className='text-lg font-semibold'>Lordswish Ugo</h5>
                                <h5 className='text-xl font-light'>Active</h5>

                            </div>
                        </main>
                          <IoCallSharp className='text-xl' style={{color:"#989B9E"}}/>

                    </div>
              
                 </div>


            </main>


        </div>

    </div>
  )
}
