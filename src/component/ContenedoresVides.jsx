import React, { useEffect, useRef } from "react";

export default function ContenedoresVides({ src, current }) {
  const videoRef = useRef(null);

  const hover = () => {
    videoRef.current.addEventListener("mouseenter", () => {
      videoRef.current.play();
    });
    videoRef.current.addEventListener("mouseout", () => {
      videoRef.current.pause();
    });
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      hover();
    }
    return () => hover();
  }, []);
  return (
    <div className=" m-[2px] w-3/12 flex-auto z-20 group relative">
      <video
        ref={videoRef}
        muted
        loop
        className="hover:scale-125 hover:-translate-y-2 hover:z-40 duration-500"
      >
        <source src={`http://localhost:4000/${src}`} type="video/mp4" />
      </video>
      <a href={`http://localhost:4000/${src}`} download>
        Descargar
      </a>
    </div>
  );
}
