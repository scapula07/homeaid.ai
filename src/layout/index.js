import React from 'react'
import Header from '../components/Header'
import "./layout.css"
import Footer from '../components/Footer'
import  { Toaster } from 'react-hot-toast';




export default function Layout({children}) {
  return (
    <div className=" relative layout  w-screen    overflow-x-hidden h-full">
          <div className='fixed w-full bg-white py-6 px-8 z-20 '>
            <Header />
          </div>
          
        <div className=" py-32 h-full" style={{background:" #FAFAFA"}}>
            {children}
          </div>

          <div className='px-8 bg-color w-full min-h-min '>
              <Footer />
          </div>

          <Toaster 
               position="top-center"
               toastOptions={{
               
                className: 'bg-black',
                // style:{background:"black"},
                duration: 5000,
               }}
          />
                 
    </div>
  )
}

