import React from 'react'
import LocationSearch from '../../components/inputFields/LocationSearch'
import SelectQueryCate from '../../components/inputFields/SelectQueryCate'
import {MdAdd} from "react-icons/md"
import { openai } from '../../openAi'



const QuerySection=()=>{
    const query=async()=>{
        console.log("querying")
        try{
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: "How u dey boss"}],
              });
            console.log(response,"resai")
            console.log(response.data.choices[0].message);
        }catch(e){
            console.log(e)
        }

        
    }

    return(
        <div className='flex flex-col items-center lg:w-3/5  space-y-6'>
             <h5 className='text-lg font-semibold flex justify-start w-full' style={{color: "#252C32"}}>Enter your query</h5>
             <div className='flex flex-col items-center w-full space-y-8'>
                       <div className='w-full bg-white h-56  rounded-lg' style={{border: "1px solid #989B9E"}}>
                    

                        </div>
                        <div className='w-full bg-white h-28 flex lg:flex-row flex-col items-center rounded-lg justify-center lg:space-x-4 space-y-4 lg:space-y-0' style={{border: "1px solid #989B9E"}}>
                            
                                <main className='lg:w-3/4 w-full h-11 rounded-xl px-8 py-2 flex items-center  space-x-4' >
                                        <button className='h-11 w-11 flex items-center justify-center rounded-xl ' style={{background: "#F5F5F5"}}>
                                            <MdAdd style={{color:" #7536C6"}}/>
                                        </button>
                                     <main className='lg:w-3/4 w-full h-11 rounded-xl px-8 py-2 flex items-center  space-x-4'  style={{background: "#F5F5F5"}} >
                                        <input placeholder="Type here" className='w-9/12 h-full border-l px-4' style={{background: "#F5F5F5"}}/>
                                     </main>
                                </main>
                                 <main className='lg:w-0 w-full  flex justify-end px-4 lg:px-0'>
                                    <button className='text-white lg:text-sm text-xs px-4 py-1 flex items-center justify-center rounded-full ' style={{background: "#7536C6"}}
                                    onClick={query}
                                    >
                                    Query
                                    </button>
                                </main>
                        </div>
             </div>
            

        </div>
    )
}

export default function Query() {
   
  return (
    <div className='py-20'>
        <div className='flex flex-col items-center space-y-16'>
            <p className='text-center lg:w-1/2 w-full text-sm' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>
             
             <div className='flex  lg:flex-row flex-col  justify-center w-full lg:space-x-20 space-y-4 px-6'>
                <div className='lg:w-1/4  w-full'>
                    <LocationSearch />
                  
                </div>
            
                <div className='lg:w-1/4 w-full'>
                   <SelectQueryCate />
                </div>
             </div>
        </div>
        
        <div className=' py-10 w-full flex justify-center px-6'>
            <QuerySection />
        </div>
          

    </div>
  )
}