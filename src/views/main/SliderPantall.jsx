import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ContenedoresVides from "../../component/ContenedoresVides";

import ImgEvent from "../../component/ImgEvent";

export default function SliderPantall() {
  const [index, setIndex] = useState(0);
  const [pexel, setPexel] = useState(false);
  const [event, items, url, movil] = useOutletContext();

  useEffect(() => {
    if (index === items.length) {
      setIndex(0);
    }
  }, [index]);

  const Render = () => {
    return (
      <div
        style={{ transform: `translateY(${-1 * index * 100}%)` }}
        className={`h-full  mx-auto duration-500 `}
      >
        {items?.map((item, i) => (
          <ContenedoresVides
            url={url}
            i={i}
            pexel={pexel}
            src={!pexel ? item.src : item.link}
            key={i}
            imgEvent={event?.imgEvent}
            imgEmpresa={event?.imgEmpresa}
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
  };

  return (
    <div
      style={{
        background: `linear-gradient(45deg ,#316DCA 0%,#FF2000 80% ) `,
      }}
      className="w-full h-full overflow-hidden mx-auto flex items-center justify-center"
    >
      <div className="w-screen h-screen bg-gray-100/50 backdrop-blur-sm mx-auto flex items-center justify-center">
        <div className="md:w-1/3 w-full h-full   bg-neutral-800">
          <div
            className={`${
              !movil ? "h-[75%] " : "h-screen"
            } bg-sky-900  overflow-hidden relative  `}
          >
            <Render />
          </div>
          {!movil ? (
            <div className="bg-gray-100 py-2 w-full flex items-center justify-around h-[25%]">
              <div className="mx-auto flex flex-col h-full items-center justify-center">
                <h2 className="mx-auto text-xl text-gray-700 font-medium">
                  Scanea para la galeria
                </h2>
                <img
                  src={event?.qr}
                  alt=""
                  className=" object-cover h-5/6 rounded-lg"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center">
                <div className="rounded-full h-28 w-28 md:w-40 md:h-40  overflow-hidden  border-2 bg-purple-500">
                  <ImgEvent url={url} imgEvent={event?.imgEvent} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
