import React from 'react'
import Header from '../components/Header'
import "./layout.css"
import Footer from '../components/Footer'


export default function Layout({children}) {
  return (
    <div className=" relative layout  w-screen    overflow-x-hidden">
          <div className='fixed w-full bg-white py-6 px-8 z-20 '>
            <Header />
          </div>
          
        <div className=" py-20 px-8">
            {children}
          </div>

          <div className='px-8 bg-color w-full min-h-min '>
              <Footer />
          </div>
                 
    </div>
  )
}

