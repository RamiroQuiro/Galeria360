import { useEffect,useState } from "react";
import ContenedoresVides from "../../component/ContenedoresVides";

export default function Galeria({ items, url }) {
  const [pexel, setPexel] = useState(true)



  return (
    <div className="flex flex-wrap items-center justify-around my-16 gap-y-1 ">
      {items?.map((item, i) => (
        <ContenedoresVides
          url={url}
          i={i}
          pexel={pexel}
          src={!pexel?item.src:item.link}
          key={i}
          slider={false}
          // setIndex={}
          className="md:w-1/5 w-2/5 h-[40vh] md:h-[40vh] mx-0.5 rounded"
          widthVideo="560"
          heightVideo="960"
        />
      ))}
    </div>
  );
}
