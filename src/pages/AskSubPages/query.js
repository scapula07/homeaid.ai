import React,{useState,useEffect} from 'react'
import LocationSearch from '../../components/inputFields/LocationSearch'
import SelectQueryCate from '../../components/inputFields/SelectQueryCate'
import {MdAdd} from "react-icons/md"
import { openai } from '../../openAi'
import { AccountState } from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
import PulseLoader from "react-spinners/PulseLoader";




const QuerySection=()=>{
     const currentUser =useRecoilValue(AccountState )
 

    const [query,setQuery]=useState({})
    const [history,setHistory]=useState([]) 
    const [loading ,setLoading]=useState(false)

    const queryCall=async()=>{
        console.log("querying")
        setLoading(true)
        try{
             const response = await openai.createChatCompletion({
                 model: "gpt-3.5-turbo",
                 messages: [{role: "user", content:query.user}],
              });
     
            
           
            setHistory([...history,{bot:response.data.choices[0].message.content,user:query.user}])
            setQuery({user:""})
            setLoading(false)
        }catch(e){
            console.log(e)
        }

        
    }

    useEffect(()=>{

    },[])

    return(
        <div className='flex flex-col items-center lg:w-3/5  space-y-6'>
             <h5 className='text-lg font-semibold flex justify-start w-full' style={{color: "#252C32"}}>Enter your query</h5>
             <div className='flex flex-col items-center w-full space-y-8'>
                         <div className='w-full bg-white h-80  overflow-y-scroll p-4 rounded-lg' style={{border: "1px solid #989B9E"}}>
                             {history.map((history)=>{
                                return(
                                     <div className='flex flex-col space-y-4 py-2' >

                                        <main className='flex space-x-4'>
                                        <main>
                                            {currentUser?.profile? 
                                                    <div className='rounded-full w-12 h-12 text-white text-xl items-center justify-center flex'  style={{background: "#7536C6"}}>
                                                        <img src={currentUser.profile}  className=" rounded-full w-6 h-6" />
                                                    </div>

                                                    :

                                                    <div className='rounded-full w-6 h-6 text-xs  text-xl items-center justify-center flex font-semibold'  style={{background: " #D9D9D9",color:"#7536C6",border: "0.5px solid #7536C6"}}>
                                                    {currentUser?.email?.slice(0,1)} 
                                                    </div>

                                                }
                                        </main>
                                        <p className='font-light text-sm'>{history.user}</p>

                                        </main>
                                  
                           
                                        <main className='flex space-x-4'>
                                                <div className='rounded-full w-6 h-6 text-xs  text-xl items-center justify-center flex'  style={{background: " #D9D9D9",color:"#7536C6",border: "0.5px solid #7536C6"}}>
                                                    HA
                                                </div>
                                           
                                                <p className='font-light text-sm'>{history.bot}</p>
                                                
                                        </main>
                             
                                      
                                     </div>
                                )
                             })

                             }



                            {query.user&&
                               <main className='flex space-x-4 py-2'>
                                   <main>
                                     {currentUser?.profile? 
                                            <div className='rounded-full w-12 h-12 text-white text-xl items-center justify-center flex'  style={{background: "#7536C6"}}>
                                                <img src={currentUser.profile}  className=" rounded-full w-6 h-6" />
                                            </div>

                                            :

                                            <div className='rounded-full w-6 h-6 text-xs  text-xl items-center justify-center flex font-semibold'  style={{background: " #D9D9D9",color:"#7536C6",border: "0.5px solid #7536C6"}}>
                                            {currentUser?.email?.slice(0,1)} 
                                            </div>

                                        }
                                   </main>
                                   <p className='font-light text-sm'>{query.user}</p>

                                </main>
                                  }
                              {loading?
                                <main className='flex space-x-4 py-2'>
                                         <div className='rounded-full w-6 h-6 text-xs  text-xl items-center justify-center flex'  style={{background: " #D9D9D9",color:"#7536C6",border: "0.5px solid #7536C6"}}>
                                            HA
                                         </div>
                                     
                                          < PulseLoader color="#7536C6" />
                                  
                                </main>

                                :
                                null
                             }  
                        </div>
                        <div className='w-full bg-white h-28 flex lg:flex-row flex-col items-center rounded-lg justify-center lg:space-x-4 space-y-4 lg:space-y-0' style={{border: "1px solid #989B9E"}}>
                            
                                <main className='lg:w-3/4 w-full h-11 rounded-xl px-8 py-2 flex items-center  space-x-4' >
                                        <button className='h-11 w-11 flex items-center justify-center rounded-xl ' style={{background: "#F5F5F5"}}>
                                            <MdAdd style={{color:" #7536C6"}}/>
                                        </button>
                                     <main className='lg:w-3/4 w-full h-11 rounded-xl px-8 py-2 flex items-center  space-x-4'  style={{background: "#F5F5F5"}} >
                                        <input placeholder="Type here" className='w-10/12 h-full border-l px-4  outline-none font-light' style={{background: "#F5F5F5"}}
                                           onChange={(e)=>setQuery({user:e.target.value})}
                                           value={query?.user}
                                        />
                                     </main>
                                </main>
                                 <main className='lg:w-0 w-full  flex justify-end px-4 lg:px-0'>
                                    <button className='text-white lg:text-sm text-xs px-4 py-1 flex items-center justify-center rounded-full ' style={{background: "#7536C6"}}
                                    onClick={queryCall}
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