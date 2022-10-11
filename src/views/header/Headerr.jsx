import React from "react";
import H1 from "../../component/H1";
import ImgEvent from "../../component/ImgEvent";
import NavBar from "./NavBar";

export default function Headerr({ event, url }) {
  return (
    <header
      style={{
        background: `linear-gradient(90deg ,${event?.color1} 0%, ${event?.color2} 80% ) `,
      }}
      className={`w-full md:h-[30vh] mb-20 px-8 md:px-16 bg-gradient-t from-red-500 to-red-300 relative flex md:flex-row flex-col  items-center border-b-4 border-neutral-200/70 justify-around`}
    >
      <NavBar />

      <div className="flex md:flex-col mx-auto items-center relative  md:w-1/2 gap-5 h-40 justify-start pt-8 ">
        <H1 className=" bg-gray-200/50 rounded-md backdrop-blur-sm px-5   ">
          {event?.nombreEvento}
        </H1>
        <div className="rounded-full md:w-40 md:h-40 w-20 h-20 overflow-hidden md:absolute -bottom-20 border-2 bg-purple-500">
          {!event ? null : <ImgEvent url={url} imgEvent={event?.imgEvent} />}
        </div>
      </div>
      <div className="hidden md:flex flex-col mx-auto items-center relative  w-1/2 gap-5 h-40 justify-start pt-8 ">
        <H1 className=" bg-gray-200/50 rounded-md backdrop-blur-sm px-5   ">
          Scanea para ingresar a la galeria
        </H1>
        <img
          src={event?.qr}
          alt=""
          className="rounded-xl w-40 h-40  overflow-hidden absolute -bottom-20 border-2 bg-purple-500"
        />
      </div>
    </header>
  );
}
