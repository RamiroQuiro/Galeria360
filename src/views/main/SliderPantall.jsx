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
        className={`h-full w-full  mx-auto duration-500 rounded-t-xl  overflow-hidden`}
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
            className="h-full w-auto rounded-t-xl"
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
        background: `linear-gradient(45deg ,#0d0d0d 0%,#2c2c2c 80% ) `,
      }}
      className="w-full h-full overflow-hidden mx-auto flex items-center justify-center"
    >
      <div className="w-screen h-screen bg-gray-800/5 backdrop-blur-sm mx-auto flex items-center justify-center">
        <div className="md:w-[30%] w-full h-full py-5 rounded-xl overflow-hidden   bg-neutral-800/20">
          <div
            className={`${
              !movil ? "h-[75%] " : "h-full"
            } bg-sky-900 w-full rounded-t-xl  overflow-hidden relative  `}
          >
            <Render />
          </div>
          {!movil ? (
            <div className="bg-neutral-300 p-3 w-full flex items-center justify-around h-[25%] rounded-b-xl">
              <div className="mx-auto flex flex-col h-full items-center justify-center">
                <h2 className="mx-auto mb-2 text-lg text-center text-gray-700 font-medium">
                  Scanea para la galeria
                </h2>
                <img
                  src={event?.qr}
                  alt=""
                  className=" object-cover h-4/6 rounded-lg"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center ">
                <div className="rounded-full h-28 w-28 md:w-40 md:h-40   border-2 bg-neutral-300">
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
