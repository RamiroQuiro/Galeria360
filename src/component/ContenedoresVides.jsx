import React, { useEffect, useRef, useState } from "react";
import { fetcQR } from "../hook/useFetch";
import SvgGroup from "./SVGCmponent/SvgGroup";


export default function ContenedoresVides({
  
  src,
  setIndex,
  i,
  slider,
  current,
  className,
  heightVideo,
  widthVideo,
  url,
  imgEvent
}) {
  const [posicionY, setPosicionY] = useState(0)
  const [isPressDownClick, setIsPressDownClick] = useState(false)
  const videoRef = useRef(null);
  const [codeQR, setCodeQR] = useState(null);
const [mutedVideo, setMutedVideo] = useState(false)


  const hover = () => {
    videoRef.current.addEventListener("mouseenter", () => {
      videoRef.current.play();
    });
    videoRef.current.addEventListener("mouseout", () => {
      videoRef.current.pause();
    });
  };
  const handleQR = () => {
    fetcQR(JSON.stringify({ src: `http://${url?.IPv4}:4000/${src}` })).then(
      (response) => setCodeQR(response)
    );
  };

  useEffect(() => {
    if (slider) {
      if (videoRef && current) {
        handleQR();
        videoRef.current.play();
        videoRef.current.addEventListener("ended", function (e) {
          setIndex(i + 1);
        });
      }
    } else {
      if (videoRef && videoRef.current) {
        hover();
      }
      if (!src) {
        return;
      }
      handleQR();
    }
    return () => {};
  }, []);

  // Comportamiento del mouse para pasar los videos con el dedo o mouse
  const handleMouseUp=()=>{
    setIsPressDownClick(false)
  }
  const handleMouseDown=(e)=>{
    setPosicionY(e.clientY)
    setIsPressDownClick(true)
  }
 
  const handleMoveMouse=(e)=>{
    if(!isPressDownClick){return}
    if(e.clientY<posicionY){
      setIndex(i + 1);
    }
    if (e.clientY>posicionY) {
      if(i==0){return}
      setIndex(i - 1);
    }
    setPosicionY(0)

  }
// termian el comportamiento delk mouse

const handleMutedVideo=()=>{
  setMutedVideo(!mutedVideo)
}
  
  return (
    <div
    onMouseUp={handleMouseUp}
    onMouseMove={handleMoveMouse}
    onMouseDown={handleMouseDown}
      className={`${className} relative flex-auto z-20 group  bg-neutral-900/70 backdrop-blur-sm  overflow-hidden`}
    >

      {
        !slider? null:
      <SvgGroup
      imgEvent={`http://${url?.IPv4}:4000/upload/${imgEvent}`}
      url={`//${url?.IPv4}:4000/${src}`}
      handleMutedVideo={handleMutedVideo}
      muted={mutedVideo}
      />
}
      {/* <button onClick={handleQR}>codQR</button> */}
      <img
        src={codeQR}
        alt=""
        className="md:absolute hidden md:flex z-50 rounded-lg  right-5 top-10 w-24"
      />
      {
        slider?
        <video
        width={widthVideo}
        height={heightVideo}
        ref={videoRef}
        muted={mutedVideo}
        className={`active:cursor-grabbing hover:scale-110 hover:-translate-y-2  cursor-grab object-cover h-full w-full hover:z-40 duration-500`}
      >
        <source src={`http://${url?.IPv4}:4000/${src}`} type="video/mp4" />
      </video>
        :
        <a
        href={`http://${url?.IPv4}:4000/${src}`}
        download={true}
        target="_blank"
      >
        <video
          width={widthVideo}
          height={heightVideo}
          ref={videoRef}
          muted
          className="hover:scale-110 hover:-translate-y-2  object-cover h-full w-full hover:z-40 duration-500"
        >
          <source src={`http://${url?.IPv4}:4000/${src}`} type="video/mp4" />
        </video>
      </a>}
    </div>
  );
}
