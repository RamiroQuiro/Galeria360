import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Columnas from "../../component/Columnas";
import ContenedoresImagen from "../../component/ContenedoresImagen";
import ContenedoresVides from "../../component/ContenedoresVides";
import { fetchData } from "../../hook/useFetch";
import useItems from "../../hook/useItems";

export default function Galeria() {
  const { data: data, error, isLoading } = useQuery(["images"], fetchData);

  const [items] = useItems(data);

  const arrayImagenes = [
    {
      linkDescarga: "https://unsplash.com/@jeka_fe",
      imagen: "../../../../ServerGaleria360/public/video-0 (1).mp4",
    },
    {
      linkDescarga: "https://unsplash.com/@jeka_fe",
      imagen: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@oladimeg",
      imagen: "https://source.unsplash.com/AHBvAIVqk64/300x500",
    },
    {
      linkDescarga: "https://unsplash.com/@a2eorigins",
      imagen: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@noahbuscher",
      imagen: "https://source.unsplash.com/AR7aumwKr2s/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@von_co",
      imagen: "https://source.unsplash.com/dnL6ZIpht2s/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@samburriss",
      imagen: "https://source.unsplash.com/tV_1sC603zA/300x500",
    },
    {
      linkDescarga: "https://unsplash.com/@marilezhava",
      imagen: "https://source.unsplash.com/Xm9-vA_bhm0/300x500",
    },
    {
      linkDescarga: "https://unsplash.com/@ethanhaddox",
      imagen: "https://source.unsplash.com/NTjSR3zYpsY/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@mr_geshani",
      imagen: "https://source.unsplash.com/2JH8d3ChNec/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@frxgui",
      imagen: "https://source.unsplash.com/FQhLLehm4dk/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@majestical_jasmin",
      imagen: "https://source.unsplash.com/OQd9zONSx7s/300x300",
    },
    {
      linkDescarga: "https://unsplash.com/@dimadallacqua",
      imagen: "https://source.unsplash.com/XZkEhowjx8k/300x500",
    },
  ];

  return (
    <div className="flex flex-wrap group md:py-5 w-full duration-200">
      <Columnas>
        {items?.map((item, i) => (
          <ContenedoresVides src={item.src} key={i} />
        ))}
      </Columnas>
    </div>
  );
}
