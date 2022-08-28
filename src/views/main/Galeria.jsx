import React from "react";
import Columnas from "../../component/Columnas";
import ContenedoresImagen from "../../component/ContenedoresImagen";

export default function Galeria() {
  const arrayImagenes = [
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
        linkDescarga:"https://unsplash.com/@majestical_jasmin",
        imagen:"https://source.unsplash.com/OQd9zONSx7s/300x300",
      },
      {
        linkDescarga: "https://unsplash.com/@dimadallacqua",
        imagen: "https://source.unsplash.com/XZkEhowjx8k/300x500",
      },
  ];

  return (
    <div className="flex flex-wrap group md:py-5 w-full duration-200">
      <Columnas>
        {arrayImagenes &&
          arrayImagenes
            .slice(0, 3)
            .map((element, i) => (
              <ContenedoresImagen
                key={i}
                linkDescarga={element.linkDescarga}
                imagen={element.imagen}
              />
            ))}
      </Columnas>

      <Columnas>
        {arrayImagenes &&
          arrayImagenes
            .slice(3, 6)
            .map((element, i) => (
              <ContenedoresImagen
                key={i}
                linkDescarga={element.linkDescarga}
                imagen={element.imagen}
              />
            ))}
      </Columnas>
      <Columnas>
        {arrayImagenes &&
          arrayImagenes
            .slice(6, 9)
            .map((element, i) => (
              <ContenedoresImagen
                key={i}
                linkDescarga={element.linkDescarga}
                imagen={element.imagen}
              />
            ))}
      </Columnas>
      <Columnas>
      {arrayImagenes &&
          arrayImagenes
            .slice(9, 12)
            .map((element, i) => (
              <ContenedoresImagen
                key={i}
                linkDescarga={element.linkDescarga}
                imagen={element.imagen}
              />
            ))}
      </Columnas>
    </div>
  );
}
