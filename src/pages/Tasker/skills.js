import React from 'react'
import SelectQueryCate from '../../components/inputFields/SelectQueryCate'
import {FaHamburger} from "react-icons/fa"
import prevWork1 from "../../assests/prevWork1.png"
import prevWork2 from "../../assests/prevWork2.png"
import prevWork3 from "../../assests/prevWork3.png"
import prevWork4 from "../../assests/prevWork4.png"
import prevWork5 from "../../assests/prevWork5.png"
import prevWork6 from "../../assests/prevWork6.png"
import holder from "../../assests/holder.png"


const SearchTag=()=>{

    return(
        <div className="flex rounded-full border  w-56 justify-center py-4 space-x-2" style={{border: "1px solid #E9EAED"}}>
            <FaHamburger />
            <h5 className='text-sm' style={{color:"#2F343A"}}>Kitchen and repair</h5>

        </div>
    )
}

const SkillTag=()=>{

    return(
        <div className="flex rounded-full border  w-56  justify-center py-4 space-x-2" style={{border: "1px solid #E9EAED", background:" #7536C6"}}>
            <FaHamburger />
            <h5 className='text-sm text-white' >Kitchen and repair</h5>

        </div>
    )
} 

export default function TaskerSkills() {
  return (
    <div className='py-10 px-8 flex justify-center w-full '>
        <div className='w-11/12'>
        <p className='text-base' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
        <main className='flex flex-col py-10 space-y-12'>
            <div className='w-2/5'>
             <SelectQueryCate />
           </div>
            <div className='flex flex-col items-start  w-full space-y-6 '>
                        <h5 className='text-lg ' style={{color: "#252C32"}}>Popular searches</h5>
                        

                        <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-4 w-full'>
                            {[1,2,3,4,5,6,7].map(()=>{
                                return(
                                <SearchTag  />
                                )
                            })

                            }
                            <button className='rounded-full border' style={{color: "#2F343A",border: "1px solid #E9EAED"}}>See all</button>
                        </div>
                    </div>

                    <div className='flex flex-col items-start  w-full space-y-6 '>
                        <h5 className='text-lg ' style={{color: "#252C32"}}>My skills</h5>
                        

                     <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-4 w-full'>
                            {[1,2,3,4,5,6,7].map(()=>{
                                return(
                                < SkillTag />
                                )
                            })

                            }
                            <button className='rounded-full border text-white' style={{border: "1px solid #E9EAED",background:" #7536C6"}}>See all</button>
                        </div>
                    </div>
                 

                
                    <div className='flex flex-col items-start  w-full space-y-8 '>
                        <h5 className='text-lg ' style={{color: "#252C32"}}>Add/upload your previous works</h5>
                        

                     <div className='grid grid-flow-row lg:grid-cols-5 grid-cols-2 gap-4 w-full'>
                           <img src={holder}/>
                            
                            {[prevWork1,prevWork2,prevWork3,prevWork4,prevWork5,prevWork6].map((work)=>{
                                return(
                                   <img src={work}/>
                                 )
                            })

                            }
                          
                        </div>
                    </div>
        

            
              </main>

               <div className='w-full flex justify-center'>
                   <button className='rounded-full px-10 py-4 text-white' style={{background: "#7536C6"}}>Continue</button>
               </div>

        </div>
    </div>
  )
}
