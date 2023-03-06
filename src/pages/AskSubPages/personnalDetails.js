import React from 'react'

export default function PersonnalDetails() {
  return (
    <div className='py-20'>
    <div className='flex flex-col items-center space-y-16'>
        <div className="flex flex-col  w-3/5 ">
            <h5 className='text-lg font-semibold' style={{color: "#787878"}}>Confirming your personal details</h5>
            <p className=' text-sm' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
                
        </div> 

        <div className='flex flex-col w-full items-center space-y-10'>
            <main className='form-1 bg-white  w-1/2 px-6 py-8 rounded-xl ' >
                  <h5 className='text-lg font-semibold' style={{color: "#585858"}}>Personal details</h5>
                  <div className='flex flex-col w-full py-4 space-y-4 w-full'>
                      <div className='flex items-center justify-between space-x-8  w-full'>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>First Name</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                         </main>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>Last Name</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                         </main>

                      </div>
                      <div className='flex flex-col space-y-2'>
                         <label style={{color: "#585858"}}>Email</label>
                         <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                      </div>

                      <div className='flex flex-col space-y-2'>
                         <label style={{color: "#585858"}}>Phone Number</label>
                           <main className='flex items-center space-x-2'>
                            <select placeholder='' style={{color: "#989B9E"}} className="outline-none border rounded-full py-2 px-2" >
                                <option value="volvo" className='outline-none w-full'>+ 90</option>
                            </select>
                         <input className='rounded-full py-2 px-2 text-slate-400 border outline-none w-full'/>
                         </main>
                      </div>

                  </div>
            </main>
            <main className='form-2 bg-white  w-1/2 rounded-xl px-6 py-8' >
                <h5 className='text-lg font-semibold' style={{color: "#585858"}}>Home address</h5>

                <div className='flex flex-col w-full py-4 space-y-4'>
                     <div className='flex flex-col space-y-2'>
                         <label style={{color: "#585858"}}>House no.</label>
                         <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                      </div>

                      <div className='flex flex-col space-y-2'>
                         <label style={{color: "#585858"}}>Address</label>
                         <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                      </div>

                      <div className='flex items-center justify-between space-x-8 w-full'>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>City</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                         </main>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>State</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                         </main>

                      </div>

                      <div className='flex items-center justify-between space-x-8 w-full '>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>Postal Code</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                         </main>
                         <main className='flex flex-col w-1/2 space-y-2'>
                            <label style={{color: "#585858"}}>Famous Landmark</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                         </main>

                      </div>
                
                </div>

            </main>

             <button className='rounded-full px-6 py-4 text-white' style={{background: "#7536C6"}}>See available service provider</button>



        </div>
       
      </div>


    </div>
  )
}
