import React,{useState} from 'react'
import Booking from './Booking'
import ServiceProvider from './ServiceProvider'

export default function Scheduler() {
   const [booked,setBooking]=useState(false)
  return (
    <div className='w-full'>
        <div className='flex justify-center pt-10'>
            < p className='text-sm text-center w-3/4' style={{color: "#787878"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.
            </p>
          
        </div>

      {/* {
        booked===false?
        <ServiceProvider />
        :
        <Booking />
      } */}
        
    </div>
  )
}
