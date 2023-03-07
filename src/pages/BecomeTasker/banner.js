import React from 'react'
import ellipse from "../../assests/ellipse1.svg"

export default function Banner() {
  return (
    <div className='py-32 text-white'>
          <div className='bg-color relative lg:h-72 banner-h'>
             <main className='flex w-full justify-end'>
                 <img src={ellipse} />
             </main>

             <main className='absolute top-0 w-full px-8 h-full'>
                  <div className='flex flex-col items-start justify-center px-20 w-full  space-y-2 h-full'>
                       <h5 className='text-white text-4xl font-semibold  w-2/5'>You can get started immediately </h5>
                       <p className='text-sm  w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. </p>
                    
                  </div>
             </main>
          </div>
    </div>
  )
}
