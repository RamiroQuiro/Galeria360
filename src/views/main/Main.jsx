import React from 'react'
import Galeria from './Galeria'

export default function Main({items,url}) {
  
  return (
    <main className="md:w-11/12 mx-auto ">
        <Galeria items={items} url={url}/>
    </main>
  )
}
