import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <nav className='w-full z-50 mx-auto uppercase md:h-2 md:hover:h-10 duration-300 overflow-hidden fixed  top-0 left-0 px-20 bg-gray-50/70 backdrop-blur-sm border-b flex flex-col md:flex-row flex-wrap justify-between items-center'>
        <div className='text-center font-bold md: md:w-1/3'>
            <img src="" alt="" />
            <p className="text-center text-2xl ">Rayuela</p>
        </div>
        <div className='flex md:justify-end justify-center items-center md:w-2/3'>
            <ul className="flex justify-between md:w-1/2 gap-8 items-center text-sm font-medium">
                {/* <NavLink
                to={'/'} 
                className=""
                >
                    Configuración
                </NavLink> */}
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
