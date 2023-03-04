import React from 'react'
import SearchBar from '../../components/SearchBar.js'
import {FaHamburger} from "react-icons/fa"


const SearchTag=()=>{

    return(
        <div className='flex rounded-full border w-36 justify-center py-3 space-x-2' style={{border: "1px solid #E9EAED"}}>
            <FaHamburger />
            <h5 className='text-xs' style={{color:"#2F343A"}}>Kitchen and repair</h5>

        </div>
    )
}
export default function Searches() {
  return (
    <div className='w-full lg:py-12'>
        <div className='flex flex-col items-center w-full space-y-14' >
            <main className='flex flex-col lg:w-1/2 w-full  items-center lg:space-y-8 space-y-4'>
                <h5 className='text-black lg:text-5xl text-2xl font-bold text-center'>
                You have all the answers to your home problems 
                </h5>
            
                <p className='text-sm text-center' style={{color: "#787878"}}> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.
                </p>


            </main>

              <main className='flex flex-col w-full items-center space-y-10'>
                  <div className='w-1/2 hidden lg:block'>
                    <SearchBar />
                  </div>

                  <div className='flex flex-col items-start lg:w-1/2 w-full space-y-6 '>
                    <h5 className='text-lg ' style={{color: "#252C32"}}>Popular searches</h5>
                     

                     <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-4'>
                          {[1,2,3,4,5,6,7].map(()=>{
                             return(
                               <SearchTag />
                             )
                          })

                          }
                          <button className='rounded-full border' style={{color: "#2F343A",border: "1px solid #E9EAED"}}>See all</button>
                     </div>
                  </div>
             
              </main>
            

        </div>
       
       


    </div>
  )
}
