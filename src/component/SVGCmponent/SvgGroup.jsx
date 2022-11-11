import React from 'react'
import SvgComponent from "./SVGcomponente";
import SVGCcomponentiktok2 from "./SVGCcomponentiktok2";
import { useState } from 'react';
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
    navigate("//"+url)
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
        <SvgComponent
        handleGaleria={handleGaleria}
        className="w-8/12 z-30  absolute  bottom-4 mx-auto left-16" />
        </>
  )
}
