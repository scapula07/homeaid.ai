import React from 'react'

export default function PaymentAccount() {
  return (
     <div className='py-10 flex flex-col w-full items-center space-y-10'>
        <p className='w-3/4 text-sm' style={{color: "#787878"}}> With this account you will receive your fees after 10% hass been taken off, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
        
        <main className='form-1 w-2/5  ' >
                    
                    <div className='flex flex-col w-full py-4 space-y-4 w-full'>
                        <div className='flex items-center justify-between space-x-8  w-full'>
                            <main className='flex flex-col w-1/2 space-y-2'>
                                <label style={{color: "#585858"}}>Bank name</label>
                                <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                            </main>
                            <main className='flex flex-col w-1/2 space-y-2'>
                                <label style={{color: "#585858"}}>Account number</label>
                                <input className='rounded-full py-2 px-2 text-slate-400 border outline-none '/>
                            </main>

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label style={{color: "#585858"}}>Account Name</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label style={{color: "#585858"}}>Iban</label>
                            <input className='rounded-full py-2 px-2 text-slate-400 border outline-none'/>
                        </div>

                        <main className='w-full flex justify-center py-8'>
                            <button className='text-white rounded-full px-8 py-2' style={{background: "#7536C6"}}>Continue</button>

                        </main>

                    </div>
                </main>
    </div>
  )
}
