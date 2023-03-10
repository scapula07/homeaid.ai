import React from 'react'
import provider from "../../../assests/provider.png"


export default function ProfileSettings() {
  return (
    <div className='w-4/5 flex justify-center h-full py-10'>

        <div className='w-4/5 flex h-full justify-between space-x-4'>
            <main className='h-full flex flex-col items-center w-11/12 space-y-6'>
                 <img src={provider} className="h-14 w-14 rounded-full"/>
                 
                 <p className='text-center text-sm '>
                   “orem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur”“orem ipsum dolor sit amet, consectetur adipiscing elit. 
                 </p>
                 <h5>Mather Gray</h5>

                 <h5>Mather Gray@gmail.com</h5>
                 <h5>+234890757686</h5>
                 <h5 className='flex'>
                    <span>Male</span>
                    <span>36</span>

                 </h5>
                 <h5>No 23 upper lagos dndn Kenya </h5>
            </main>
            <main className='h-full flex flex-col w-1/4 justify-between '>
                <button className='text-white rounded-full px-4 py-2 text-xs' style={{background: "#A262F3"}}>Edit Details</button>
                <button className='text-white rounded-full px-4 py-2 text-xs' style={{background: "#787878"}}>Save changes</button>
            </main>

        </div>


    </div>
  )
}
