import React from 'react'
import provider from "../../assests/provider.png"

export default function Detailing() {
  return (
    <div className='flex w-full justify-center py-10'>
         <div className='w-1/2 flex flex-col space-y-8'>
             <h5 className='text-lg font-semibold'>Personal details</h5>

                <main className='flex items-center space-x-4'>
                   <img src={provider} className="w-12 h-12"/>
                    <h5 className='underline' style={{color: "#7536C6"}}>Add a dp</h5>
                  </main>

                 <div className='w-full'>

                     <main className='form-1 w-full   ' >
                    
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


                
                <div className='flex flex-col w-full py-4 space-y-4'>
                         <div className='flex items-center justify-between space-x-8  w-full'>
                                <main className='flex flex-col w-1/2 space-y-2'>
                                    <label style={{color: "#585858"}}>Age</label>
                                    <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                                </main>
                                <main className='flex flex-col w-1/2 space-y-2'>
                                    <label style={{color: "#585858"}}>Gender</label>
                                    <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                                </main>

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
              
            <div className='flex flex-col py-10 space-y-8'>
                
                <h5 className='text-lg font-semibold '>Write a little about yourself</h5>
                <textarea className='border h-32 rounded-lg'/>
                
            <main className='w-full flex justify-center'>
                <button className='text-white rounded-full px-8 py-2' style={{background: "#7536C6"}}>Continue</button>

            </main>

            </div>
                 

          </div>
             
           

              
                
          </div>

    </div>
  )
}
