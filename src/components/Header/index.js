import React from 'react'
import icon from "../../assests/icon.png"
import "./header.css"
import { Link } from 'react-router-dom'
import { AccountState } from "../../recoil/globalState"
import { useRecoilValue} from 'recoil';



export default function Header() {

    const currentUser =useRecoilValue(AccountState)

    console.log(currentUser,"user")



  return (
    <div className='w-full white'>
         <div className='flex items-center w-full justify-between'>
               <main className='flex items-center space-x-3' >
                    <div className='flex items-center '>
                        <img src={icon} className="w-5 h-8 "/>
                        <img src={icon}  className="w-5 h-8 "/>

                    </div>
                    <h5 className='text-lg font-bold text-color'>Homeaid</h5>
               </main>
               <main className='hidden  lg:flex text-color-sm text-lg font-normal items-center space-x-8'>
                 <Link to="/"><h5 className=''>Home</h5></Link> 
                 <Link to="#"> <h5>About</h5></Link>
                 <Link to="/ask"> <h5>Ask</h5></Link>
                 <Link to="/become-tasker"><h5>Become Tasker</h5></Link>  


               </main>
               { !currentUser&&
                  
                <main className='hidden  lg:flex items-center space-x-4'>
              
                   <Link to="/signin"><h5 className='text-lg font-normal' style={{color:" #808080;"}}>Login</h5></Link>
                   <Link to="/signup"> <button className='bg-color px-4 py-2 text-white rounded-full  '>Create account</button></Link>
              
               </main>
                 }

               { currentUser&&
                  
                  <main className='hidden  lg:flex items-center space-x-4'>
                  {currentUser?.profile? 
                    <div className='rounded-full w-12 h-12 text-white text-xl items-center justify-center flex'  style={{background: "#7536C6"}}>
                        <img src={currentUser.profile}  className=" rounded-full w-10 h-10" />
                    </div>

                    :

                    <div className='rounded-full w-12 h-12 text-white text-xl items-center justify-center flex'  style={{background: "#7536C6"}}>
                       {currentUser?.email?.slice(0,1)} 
                    </div>

                  }
                
                 </main>
                 }
         </div>
    </div>
    )
}
