import React,{useState} from 'react'
import {MdHorizontalRule} from "react-icons/md"
import bar from "../../assests/bar.svg"
import { Link } from 'react-router-dom'
export default function ProgressBar() {
    const [step,setStep]=useState("1")
  return (
    <div className='w-full flex flex-col '>
      <div className='flex justify-center'>
          
         
         <Link to="">
            <button className={`p-2 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center ${ step=="1"? "bg-purple-400 ":"bg-slate-400" }`}
            onClick={()=>setStep("1")}
            > 1</button>
           </Link> 
            <img src={bar} />
           
            <Link to="works" >
            <button  className={`p-2 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center ${ step=="2"? "bg-purple-400 ":"bg-slate-400" }`}
                onClick={()=>setStep("2")}
            > 2</button>
            </Link>
         <img src={bar} />
         <Link to="acount-setup">
            <button  className={`p-2 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center ${ step=="3"? "bg-purple-400 ":"bg-slate-400" }`}
            onClick={()=>setStep("3")}
            > 3</button>
            </Link>

            <img src={bar} />
         <Link to="schedule-setup" >
            <button  className={`p-2 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center ${ step=="4"? "bg-purple-400 ":"bg-slate-400" }`}
            onClick={()=>setStep("4")}
            > 4</button>
            </Link>
           
      </div>

       <div className='flex justify-center  '>
            <span className={`p-2  flex items-center justify-center ${ step=="1"? "text-black ":"text-slate-400" }`}
            >Personal details </span>
              <h5 className='w-1/6' style={{width:"12%"}}></h5>
              <span className={`p-2 rounded-full  flex items-center justify-center ${ step=="2"? "text-black ":"text-slate-400" }`}
             >List what you do</span>
             <h5 className='w-1/6' style={{width:"12%"}}></h5>
                   <span className={`p-2  rounded-full  flex items-center justify-center ${ step=="3"? "text-black ":"text-slate-400" }`}
            >Set up your account</span>

        <h5 className='w-1/6' style={{width:"12%"}}></h5>
                   <span className={`p-2  rounded-full  flex items-center justify-center ${ step=="4"? "text-black ":"text-slate-400" }`}
            >Setup availability</span>
      </div>
    </div>
  )
}
