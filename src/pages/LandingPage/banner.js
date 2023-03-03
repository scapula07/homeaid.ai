import React from 'react'
import ellipse from "../../assests/ellipse1.svg"
import {MdAdd} from "react-icons/md"
import {RiAddFill} from "react-icons/ri"
import google from "../../assests/google.png"
import hubspot from "../../assests/hubspot.png"
import microsoft from "../../assests/microsoft.png"
import walmat from "../../assests/walmat.png"
import onet from "../../assests/1000.png"
import airBnb from "../../assests/airbnb.png"




export default function Banner() {
  return (
    <div className='py-32 text-white'>
          <div className='bg-color relative lg:h-72 banner-h'>
             <main className='flex w-full justify-end'>
                 <img src={ellipse} />
             </main>

             <main className='absolute top-0 w-full px-8'>
                  <div className='flex flex-col items-center w-full py-12 space-y-24 '>
                       <h5 className='text-white text-2xl font-semibold text-center '>Our service has been tasted and trusted</h5>

                       <main className='grid grid-flow-row lg:grid-cols-8 grid-cols-2  lg:gap-x-16 gap-x-24 gap-y-24  lg:gap-y-0 '>
                           <div className='flex flex-col items-center'>
                              <img src={onet} className="w-24" />
                             
                              <h5 className='text-sm font-light'>Home users</h5>
                           </div>
                           <div className='flex flex-col items-center'>
                           <img src={onet} className="w-24"/>
                              <h5 className='text-sm font-light'>Home users</h5>
                           </div>
                           <div className='flex flex-col items-center'>
                           <img src={onet} className="w-24"/>
                              <h5 className='text-sm font-light'>Home users</h5>
                           </div>
                           <div>
                               <img src={airBnb} className="w-24" />
                           </div>
                           <div>
                           <img src={hubspot} className="w-24" />
                           </div>
                           <div>
                             <img src={google}  className="w-24"/>
                           </div>
                           <div>
                              <img src={microsoft}  className="w-24"/>
                           </div>
                           <div>
                              <img src={walmat} className="w-24"/>
                           </div>

                       </main>
                  </div>
             </main>
          </div>
    </div>
  
  )
}
