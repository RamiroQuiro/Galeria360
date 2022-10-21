import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ({event}) {
    
  return (
    <nav className='w-full z-50 mx-auto uppercase md:h-2 md:hover:h-10 group duration-300 overflow-hidden fixed  top-0 left-0 md:px-20 bg-gray-50/70 backdrop-blur-sm border-b flex flex-row  justify-around items-center'>
        <div className='text-center font-bold  md:w-1/3 group-hover:visible md:invisible group-hover:duration-300 duration-300'>
            <p className="text-center text-xl md:text-2xl ">{event?.nombreEmpresa || "RamaCode"}</p>
        </div>

        <div className='flex md:justify-end  items-center  md:w-2/3 group-hover:visible md:invisible duration-300 group-hover:duration-300'>
            <ul className="flex justify-between md:w-1/2 gap-8 items-center text-sm font-medium">
                <NavLink
                to={'/slider'} 
                className=""
                >
                    Slider
                </NavLink>
                <NavLink
                to={'/perfil'} 
                className=""
                >
                    Contacto
                </NavLink>
            </ul>
        </div>
    </nav>
    )
}
