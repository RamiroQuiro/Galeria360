import React from 'react'
import NavBar from '../header/NavBar'
import NavBarSlider from './NavBarSlider'

export default function Sidebar({event,items,url,movil}) {
  return (
    
<div className={`relative   md:w-[13vw] w-full h-10  `}>
    <div className={`md:w-[12vw] w-full  md:fixed left-0 top-0 bg-gray-800 md:block md:h-auto h-10 `}>
        <div className=" md:h-screen h-10 flex md:flex-col items-center justify-around">
            <div className="md:flex items-center hidden text-gray-300 flex-col justify-start mt-10">
                <img className="h-20" src={`http://${url?.IPv4}:4000/upload/${event?.imgEmpresa}`}/>
                <span className="  text-2xl font-bold">
                {event?.nombreEmpresa}
                </span>
                <span className='text-center '>
                    {event?.descripcion}
                </span>
            </div>
            {/* <NavBar event={event}/> */}
           <NavBarSlider/>
           
            <div className="mx-auto hidden md:block bottom-1/5 left-5 my-10">
                <p  className="mb-5 mx-auto text-gray-300 text-center text-xl font-bold w-11/12">Scanea para ingresar a la Galeria</p>
            <img
          src={event?.qr}
          alt=""
          className="rounded-xl w-36 mx-auto  h-36  overflow-hidden  border-2 bg-slate-900"
        />
            </div>
        </div>
    </div>
</div>

  )
}
