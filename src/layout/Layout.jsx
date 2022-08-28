import React from 'react'
import Footer from '../views/footer/Footer'
import Header from '../views/header/Header'
import Main from '../views/main/Main'

export default function Layout() {
  return (
    <div className='w-full  relative mx-auto text-neutral-700'>
         <div className=" bg-pack-train absolute  left-0  h-[75vh] md:w-2/3"></div>
       <Header/>
       <Main/>
       <div className=" bg-wave2  h-full "></div>
       <Footer/>
    </div>
    )
}
