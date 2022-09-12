import React from 'react'

export default function Columnas({children}) {
  return (
            <div  className="flex flex-wrap  w-10/12 md:w-11/12 gap-y-3  items-center mx-auto ">
                {children}
            </div>
        )
    }
  
