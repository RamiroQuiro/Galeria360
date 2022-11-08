import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Headerr from '../header/Headerr'
import Galeria from './Galeria'
import Sidebar from './Sidebar'

export default function Main({event,items,url,movil}) {
  
  return (
    <main className="md:w-full mx-auto flex items-center justify-center md:flex-row flex-col ">
      
      <Sidebar  event={event} url={url}/>
        <Galeria items={items} url={url}/>
    </main>
  )
}
