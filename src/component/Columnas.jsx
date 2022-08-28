import React from 'react'

export default function Columnas({children}) {
  return (
            <div  className="flex flex-col  w-1/2 md:w-3/12 gap-y-3 overflow-hidden items-center mx-auto ">
                {children}
            </div>
        )
    }
  
