import { useEffect,useState } from "react";
import ContenedoresVides from "../../component/ContenedoresVides";

export default function Galeria({ items, url }) {
  const [pexel, setPexel] = useState(false)



  return (
    <div className="flex flex-wrap flex-auto items-center w-full px-5 my-5 justify-around  gap-y-1 ">
      {items?.map((item, i) => (
        <ContenedoresVides
          url={url}
          i={i}
          pexel={pexel}
          src={!pexel?item.src:item.link}
          key={i}
          slider={false}
          // setIndex={}
          className="md:w-1/5 w-2/5 h-[30vh] md:h-[30vh] mx-0.5 rounded"
          widthVideo="560"
          heightVideo="560"
        />
      ))}
    </div>
  );
}
