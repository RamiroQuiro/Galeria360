import Columnas from "../../component/Columnas";
import ContenedoresVides from "../../component/ContenedoresVides";

export default function Galeria({ items, url }) {
  return (
    <div className="flex flex-wrap items-center justify-around my-16 gap-y-2 ">
      {items?.map((item, i) => (
        <ContenedoresVides
          url={url}
          i={i}
          src={item.src}
          key={i}
          slider={false}
          // setIndex={}
          className="md:w-1/5 w-2/5 h-[40vh] md:h-[65vh] mx-2 rounded-lg"
          widthVideo="560"
          heightVideo="960"
        />
      ))}
    </div>
  );
}
