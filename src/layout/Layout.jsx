import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../views/footer/Footer'
import Header from '../views/header/Header'
import Headerr from '../views/header/Headerr'
import Main from '../views/main/Main'

export default function Layout() {



const [imgEvent,setImgEvent]=useState(null)
const [event,setEvent]=useState(null)

useEffect(()=>{
  const datosLocales=localStorage.getItem('config')
  const imgEvent=localStorage.getItem('imgEvent')
  if(!datosLocales){return}

const data=() => {
  setEvent(JSON.parse(datosLocales))
  setImgEvent(JSON.parse(imgEvent))
}
data()
},[event])

  return (
    <div className='w-full  relative mx-auto text-neutral-700'>
         {/* <div className="  absolute  left-0  h-[75vh] md:w-2/3"></div> */}
       <Headerr 
       imgEvent={imgEvent}
       event={event}/>
       <Main 
       event={event}/>
       <div className=" bg-wave2  h-full "></div>
       <Footer/>
    </div>
    )
}
