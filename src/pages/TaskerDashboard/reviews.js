import React from 'react'
import provider from "../../assests/provider.png"
import {AiOutlineStar,AiOutlineHeart} from "react-icons/ai"

const ReviewCard=()=>{
    return(
        <div className='flex w-full item-center justify-between'>
            <div className='flex space-x-2 w-1/2'>
                <img src={provider} className="h-6 w-6" />
                <main className='flex flex-col'>
                    <h5 className='text-lg font-semibold'>Rafiu Ahmed </h5>
                    <p className='text-sm font-light'>“orem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur”</p>
                    <main className='flex'>
                        {[1,2,3,4,5].map(()=>
                          <AiOutlineStar  className='' style={{color:"rgba(255, 193, 0, 1)"}}/>
                        )}

                    </main>
                </main>

            </div>
            <div className='flex items-center space-x-10' >
                <AiOutlineHeart className='text-xl font-light' style={{color:"#7536C6"}}/>
                <button className='rounded-full text-white py-2 text-sm px-8' style={{background: "#A262F3"}}> Reply review</button>


            </div> 

        </div>
    )
}

export default function ReviewSection() {
  return (
    <div className='px-4 h-full '>
        <div className='h-5/6  w-full overflow-y-scroll flex flex-col items-center space-y-8'>
            {[1,2,3,4,5].map(()=>{
                return(
                  <ReviewCard />
                )
            })

            }
           

         </div>
    </div>
  )
}
