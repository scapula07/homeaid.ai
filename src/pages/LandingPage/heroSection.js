import React from 'react'
import img1 from "../../assests/unsplash1.png"
import img2 from "../../assests/unsplash2.png"
import img3 from "../../assests/unsplash3.png"
import img4 from "../../assests/unsplash4.png"
import img5 from "../../assests/unsplash5.png"
import img6 from "../../assests/unsplash6.png"
import img7 from "../../assests/unsplash7.png"
import SearchBar from '../../components/SearchBar.js'
import icon from "../../assests/icon.png"

export default function HeroSection() {
  return (
<div className='flex flex-col w-full px-8'>

 
    <div className='flex  lg:flex-row flex-col w-full items-center lg:space-x-20 space-y-28'>
         <main className='flex lg:w-1/2 w-full flex-col space-y-4 lg:px-4'>
            <p className='lg:text-5xl text-2xl text-center lg:text-start font-bold flex flex-col lg:space-y-4' style={{color:"#252C32"}}>
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
            <p clasName="lg:text-sm text-center lg:text-start text-xs" style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              
            Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>


         </main>
         <main className='lg:w-1/2 w-full flex flex-col lg:space-y-10 space-y-14' style={{height: "471px"}}>
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

               <div className='flex items-center w-full lg:space-x-1 space-x-2'>
                    <main className='flex items-center'>
                    <img src={icon} className="w-5 h-8 "/>
                    <img src={icon}  className="w-5 h-8 "/>
                    </main>

                    <p className='text-sm text-center lg:text-start' style={{color: "#787878"}}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <br className='lg:block hidden'></br>
                     Tincidunt in consectetur pharetra elit tincidunt.

                    </p>
  
              </div>

         </main>

    </div>

      <div className='flex w-full space-x-20'>
        <main className='w-1/2 lg:block hidden'>
            <SearchBar />
        </main>
       
         <main className='w-1/2'>
            
         </main>


      </div>


    </div>
  )
}
