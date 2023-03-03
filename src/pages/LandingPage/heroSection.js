import React from 'react'
import img1 from "../../assests/unsplash1.png"
import img2 from "../../assests/unsplash2.png"
import img3 from "../../assests/unsplash3.png"
import img4 from "../../assests/unsplash4.png"
import img5 from "../../assests/unsplash5.png"
import img6 from "../../assests/unsplash6.png"
import img7 from "../../assests/unsplash7.png"
import SearchBar from '../../components/SearchBar.js'


export default function HeroSection() {
  return (
    <div className='flex flex-col'>

 
    <div className='flex  w-full items-center justify-between'>
         <main className='flex w-1/2 flex-col space-y-4 px-4'>
            <p className='text-5xl font-bold flex flex-col space-y-4'>
              <span>
                 Get help for all home 
              </span>
              
               <span>
                 repairs We connect you 
                </span> 
              
               <span>
                to the best 
               </span>
             
            </p>
            <p clasName="text-sm" style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>


         </main>
         <main className='w-/12' style={{height: "471px"}}>
            <div className='flex space-x-4 '>
                <main className='flex flex-col space-y-4'>
                     <img src={img1}/>
                     <img src={img4}/>
                     <img src={img5}/>
                </main>
                <main className='flex flex-col space-y-4'>
                    <img src={img6}/>
                    <img src={img7}/>
                    <img src={img3}/>
                </main>
                <main>
                  <img src={img2}/>
                </main>


            </div>

         </main>

    </div>

      <div className='flex w-full'>
        <main className='w-1/2'>
            <SearchBar />
        </main>
      


      </div>


    </div>
  )
}
