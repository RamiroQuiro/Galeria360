import React from 'react'
import NavBar from './NavBar'
import imagenHeader from '../../assets/fotoHeader.png'


export default function Header({children}) {
  return (
    <header className='w-full h-2/3 px-8 md:px-16'>
        <NavBar/>
        <div className='flex  flex-col-reverse md:flex-row justify-between items-stretch mx-auto pt-20 md:pt-0 md:h-[75vh] '>
            <div className={` md:w-2/3 md:bg-transparent bg-purple-600/50 rounded-3xl my-10 md:my-0  z-0 md:pt-12 h-full`}>
              <img src={imagenHeader} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-10 h-full text-center '>
                <h1 className="text-7xl text-purple-800 -rotate-3 -skew-x-6 font-bold">Cabina 360° Rayuela</h1>
                <span className="font-medium text-sm">Cabinas de fotos, cabina 360, juegos, bar, comida, todo para tu fiesta</span>
                <button className="rounded-lg bg-purple-600 font-medium px-4 text-white py-2">Contacto</button>
                <ul className='w-full flex gap-3 mx-auto items-center justify-around font-medium text-sm'>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>paginaWeb</li>
                </ul>
            </div>
        </div>
    </header>
  )
}
