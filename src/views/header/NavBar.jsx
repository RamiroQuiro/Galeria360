import React from 'react'

export default function () {
  return (
    <nav className='w-full z-50 mx-auto uppercase h-12 fixed top-0 left-0 px-20 bg-gray-50/70 backdrop-blur-sm border-b flex flex-wrap justify-between items-center'>
        <div className='text-center font-bold w-1/3'>
            <img src="" alt="" />
            <p>Rayuela</p>
        </div>
        <div className='flex justify-end items-center w-2/3'>
            <ul className="flex justify-between w-1/2 items-center text-sm font-medium">
                <li className='cursor-pointer'>home</li>
                <li className='cursor-pointer'>galeria</li>
                <li className='cursor-pointer'>contacto</li>
            </ul>
        </div>
    </nav>
    )
}
