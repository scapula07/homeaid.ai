import React from 'react'
import line from "../../assests/Line.png"
import  linked from "../../assests/linked.png"
import  googleIn from "../../assests/googleIn.png"

export default function SignIn() {
  return (
     <div className='flex items-center justify-center py-10'>
            <div className='w-1/2 bg-white  rounded-xl flex flex-col items-center py-10'>
                <h5 className='text-2xl font-semibold' style={{color: "#787878"}}>Login</h5>
                
                                
                <div className='flex flex-col w-3/5 py-4 space-y-4 items-center'>


                    <input  className='w-full rounded-full py-2 border px-8'   placeholder='Email address'/>
                    <input  className='w-full rounded-full py-2 border px-8'   placeholder='Password'/>
                    <h5 className='flex w-full justify-start text-sm' style={{color: "#7536C6"}}>Forgot Password</h5>

                    <div className='flex flex-col items-center w-full space-y-3'>
                        <button className='w-full py-2 text-white rounded-full ' style={{background:"#7536C6"}}>Login</button>
                        <h5 className='flex items-center '>
                             <span className="" style={{color: "#2D333A"}}>Don't have an account?</span>
                              <span className='' style={{color:"#7536C6"}}>Create account</span>
                        </h5>

                      </div>

                </div>
               
                    <div className='flex items-center space-x-4'>
                         <img src={line } />
                        <span>OR</span>
                        <img src={line } />
                        
                    </div>
                    

                    <div className='flex flex-col w-3/5 space-y-4 py-4'>
                        <button className='w-full py-3 text-slate-600 rounded-full flex items-center justify-center space-x-4 border' >
                            <img  src={googleIn} />
                            <span className='text-sm'>   Continue with Google </span>
                        </button>
                        <button className='w-full py-3 text-slate-600 rounded-full flex items-center justify-center space-x-4 border '>
                          <img  src={linked} />
                            <span className='text-sm'>Continue with Linkedin</span>
                        </button>
                    </div>

            </div>

    </div>
  )
}
