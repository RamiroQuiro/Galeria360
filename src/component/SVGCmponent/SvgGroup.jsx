import React from 'react'
import SvgComponent from "./SVGcomponente";
import SVGCcomponentiktok2 from "./SVGCcomponentiktok2";
import { useState } from 'react';
import galeria from '../../assets/galeriaimagenes.svg'
import { useNavigate } from 'react-router-dom';

export default function SvgGroup({url,imgEvent,handleMutedVideo,muted}) {
  const navigate=useNavigate()
  const [like, setLike] = useState(false)
  const handleClickLike=()=>{
    addEventListener('dblclick',()=>{
        setLike(!like)
    })
  }
  const handleDownload =()=>{

    const link= document.createElement('a')
    link.download="video360"
    link.href="//"+url
    link.click()
  }

const handlePerfil=()=>{
  navigate('/perfil')
}
const handleGaleria=()=>{
  navigate('/')
}
  return (
    <>
       <SVGCcomponentiktok2
            handlePerfil={handlePerfil}
              className="absolute right-5 h-3/6 bottom-24 z-30"
              url={url}
              onClik={handleClickLike}
              handleDownload={handleDownload}
              like={like}
              image={imgEvent}
              muted={muted}
              handleMutedVideo={handleMutedVideo}
            />
      <div 
      onClick={handleGaleria}
      className=' z-50  h-10 absolute bottom-0 flex items-center bg-neutral-600/50 backdrop-blur-sm
       cursor-pointer justify-center gap-2 py-2  w-full '>
        <img src={galeria} alt="galeria" className='object-cover w-8 h-8'/>
        <span className='font-bold text-gray-100'>Galeria</span>
      </div>
      </>
  )
}
