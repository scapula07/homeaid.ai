import React from 'react'
import {IoLocationOutline} from "react-icons/io5"




export default function LocationSearch() {
  return (
    <div className='w-full rounded-full border flex items-center px-4 py-4 space-x-2'>
        <IoLocationOutline className="text-lg" style={{color:"#989B9E"}}/>
        <h5 className='' style={{color:"#989B9E"}}>Enter your location</h5>

    </div>
  )
}
