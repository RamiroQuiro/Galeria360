import React, { useEffect, useRef,useState } from "react";
import { fetcQR } from "../hook/useFetch";

export default function ContenedoresVides({ src, current }) {
  const videoRef = useRef(null);
  const [codeQR,setCodeQR]=useState (null)
  const hover = () => {
    videoRef.current.addEventListener("mouseenter", () => {
       videoRef.current.play();
     });
     videoRef.current.addEventListener("mouseout", () => {
       videoRef.current.pause();
     });
  };
  const handleQR=()=>{
  fetcQR(JSON.stringify({src:`http://localhost:4000/${src}`})).then((response)=>setCodeQR(response))
  }

   useEffect(() => {
     if (videoRef && videoRef.current) {
       hover();
     }
     if(!src){
       return
     }
     handleQR()
   
   }, [src]);



  

  return (
    <div className=" m-[2px] w-3/12 relative flex-auto z-20 group overflow-hidden">
         {/* <button onClick={handleQR}>codQR</button> */}
         <img src={codeQR} alt="" className="absolute z-50  right-5 top-10 w-24" />
         <a href={`http://localhost:4000/${src}`} download={true} target="_blank">
      <video
        ref={videoRef}
        muted
        loop
        className="hover:scale-110 hover:-translate-y-2 hover:z-40 duration-500"
      >
        <source src={`http://localhost:4000/${src}`} type="video/mp4" />
      </video>
      </a>
    </div>
  );
}
