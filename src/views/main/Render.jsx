import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ContenedoresVides from "../../component/ContenedoresVides";

export default function Render({ index,setIndex }) {
  const [event, items, url] = useOutletContext();


  return (
    <div
      style={{ transform: `translateY(${-1 * index * 100}%)` }}
      className={`h-full  mx-auto duration-500 `}
    >
      {items?.map((item, i) => (
        <ContenedoresVides
          url={url}
          i={i}
          src={item.src}
          key={i}
          imgEvent={event?.imgEvent}
          slider={true}
          current={index == i}
          setIndex={setIndex}
          className="h-full w-auto"
          widthVideo="560"
          heightVideo="960"
        />
      ))}
    </div>
  );
}
