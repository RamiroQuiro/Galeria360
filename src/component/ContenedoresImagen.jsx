import React from 'react'
import { Link } from 'react-router-dom'
import download from '../assets/download.svg'

export default function ContenedoresImagen({linkDescarga,imagen}) {
    return (
        <div className="overflow-hidden m-[2px] relative">
				<img src={imagen} alt="" className="object-center object-cover peer hover:scale-110 duration-200"/>
                <div className='absolute  bg-purple-400/20 backdrop-blur-sm w-full h-full z-40 top-0 left-0 translate-y-full duration-150 peer-hover:-translate-y-0 flex flex-col items-center justify-center'>
                        <Link 
                        to={linkDescarga}
                        target="_blank"
                        className='cursor-pointer block w-1/4 z-50 '
                        >
                       <img src={download} className="" alt={linkDescarga} />
                    <button className="font-medium text-white">Descargar</button> 

                        </Link>
                </div>
		</div>
    )
}
