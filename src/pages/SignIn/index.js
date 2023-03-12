import React,{useState} from 'react'
import line from "../../assests/Line.png"
import  linked from "../../assests/linked.png"
import  googleIn from "../../assests/googleIn.png"
import { doc,getDoc,setDoc }  from "firebase/firestore";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { logIn,db} from '../../firebase';
import BarLoader from "react-spinners/BarLoader";
import { GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



export default function SignIn() {
  let navigate = useNavigate();

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [loading, setLoading]=useState(false)

  const provider = new GoogleAuthProvider();

  const [errors,setError]=useState({})

  const validate =(e)=> { 
    console.log("validating")
   
    if (e.target.name==="email") {
  
      console.log("validating email")
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
        setError({
          email:'Invalid email address'
        })
      } 
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
        setError({
          email:''
        })
      } 
    } 
    if (e.target.name==="password") {
  
      console.log("validating password")
      if (e.target.value.length<=6){
        console.log("top")
        setError({
          password:"Password is too short"
        })
      } 

    if (e.target.value.length>=6){
      console.log("bottom")
      setError({
        password:"Password strength is good"
      })
    } 
    } 
 
  
  

  };


  const signInWithGoogle=async()=>{

    try{

       const result =  await signInWithPopup(auth,provider)
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       const user = result.user;
       console.log(user,"user")
       
       const uid=user.uid
        
       uid.length >0&& navigate('/')

       }catch(e){
       console.log(e)

       if(e.message==="Firebase: Error (auth/cancelled-popup-request)."){
         return   setError({firebase:"Invalid email"})
       
        }else{
         toast.error("Something went wrong! ,try again")
        }
       }
     }


  const siginIn =async()=>{
      if( email===""&& password==="") return  setError({ email:'Email field is required', password:'Password field is required' })
      setLoading(true)
    try{
      const userCredential  = await logIn(email,password)
      const user=userCredential?.user
      const uid=user.uid
      uid.length >0&& navigate('/')
    }catch(e){
      console.log(e)

      setLoading(false)
          
      if(e.message==="Firebase: Error (auth/missing-email)."){
       return   setError({firebase:"Invalid email"})
     
      }else if(e.message==="Firebase: Error (auth/internal-error)."){
          return   setError({
            firebase:"Poor internet connection"
          })
          // return  toast.error("Poor internet connection")
      }else{
        toast.error("Something went wrong! ,try again")
      }
    }
  
}


  return (
     <div className='flex items-center justify-center  lg:py-10 px-2 lg:px-0 h-full'>
            <div className='lg:w-1/2 w-full bg-white  rounded-xl flex flex-col items-center py-10'>
                <h5 className='text-2xl font-semibold' style={{color: "#787878"}}>Login</h5>
                
                                
                <div className='flex flex-col lg:w-3/5 w-4/5 lg:py-4 py-14 space-y-4 items-center'>


                    <input  className='w-full rounded-full py-2 border px-8'   placeholder='Email address'
                      name="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      onKeyPress={(e)=> validate(e)}
                      onKeyDown={(e)=> validate(e)}
                    />
                       {errors.email?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.email}</h5>:null}
                    <input  className='w-full rounded-full py-2 border px-8'   placeholder='Password'
                          onChange={(e)=>setPassword(e.target.value)}
                          name="password"
                          value={password}
                          onKeyPress={(e)=> validate(e)}
                      />
                       {errors.password?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.password}</h5>:null}

                    <h5 className='flex w-full justify-start text-sm' style={{color: "#7536C6"}}>Forgot Password</h5>

                    <div className='flex flex-col items-center w-full space-y-3 lg:py-0 py-14'>
                        <button className='w-full py-2 text-white rounded-full flex items-center justify-center h-10 ' style={{background:"#7536C6"}} 
                            onClick={siginIn}
                        >
                         {loading&&<BarLoader color="white" loading={loading}/>}
                      
                           {!loading&&  <span>Login</span>}
                        
                        
                        </button>
                        <h5 className='flex items-center '>
                             <span className="" style={{color: "#2D333A"}}>Don't have an account?</span>
                             <Link to="/signup"> <span className='' style={{color:"#7536C6"}}>Create account</span></Link>
                        </h5>

                      </div>

                </div>
               
                    <div className='flex items-center space-x-4 w-1/2 lg:w-full justify-center'>
                         <img src={line } />
                        <span>OR</span>
                        <img src={line } />
                        
                    </div>
                    

                    <div className='flex flex-col lg:w-3/5 w-4/5 space-y-4 py-4'>
                        <button className='w-full py-3 text-slate-600 rounded-full flex items-center justify-center space-x-4 border' 
                           onClick={signInWithGoogle}
                          >
                            <img  src={googleIn} />
                            <span className='text-sm'>   Continue with Google </span>
                        </button>
                        <button className='w-full py-3 text-slate-600 rounded-full flex items-center justify-center space-x-4 border '>
                          <img  src={linked} />
                            <span className='text-sm'>Continue with Linkedin</span>
                        </button>
                    </div>
                   
                    {errors.firebase?<h5 className='text-sm lg:w-3/5 w-4/5  items-center justify-center  flex text-red-700 font-light'>{errors.firebase}</h5>:null}

            </div>

    </div>
  )
}
