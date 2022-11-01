import React from "react";
import H1 from "../../component/H1";
import ImgEvent from "../../component/ImgEvent";
import NavBar from "./NavBar";

export default function Headerr({ event, url, movil }) {
  return (
    <header
      style={{
        background: `linear-gradient(90deg ,${event?.color1} 0%, ${event?.color2} 80% ) `,
      }}
      className={`w-full  md:h-[10vh]  px-8 md:px-16 bg-gradient-t from-red-500 to-red-300 relative md:flex md:flex-row flex-col  items-center border-b-4 border-neutral-200/70 justify-around`}
    >
      <NavBar event={event} />

      {/* <div className="flex md:flex-col mx-auto items-center relative  md:w-1/2 gap-5 h-40 justify-start pt-8 ">
        <H1 className=" bg-gray-200/50 rounded-md backdrop-blur-sm px-5   ">
          {event?.nombreEvento}
        </H1>
        <div className="rounded-full md:w-32 md:h-32 w-24 h-24 overflow-hidden md:absolute -bottom-10 border-2 bg-slate-900">
          {!event ? null : <ImgEvent url={url} imgEvent={event?.imgEvent} />}
        </div>
      </div> */}
      <div className="hidden md:flex flex-row mx-auto items-center relative   px-10 rounded-xl gap-5 h-24 justify-center pt-12 bg-white/10 backdrop-blur-sm shadow-lg">
      <H1 className=" bg-gray-200/50 rounded-md backdrop-blur-sm px-5   ">
          {event?.nombreEmpresa}
        </H1>
        <H1 className=" bg-gray-200/50 text-lg rounded-md backdrop-blur-sm px-5   ">
          Scanea para ingresar a la galeria
        </H1>
        <img
          src={event?.qr}
          alt=""
          className="rounded-xl w-24 h-24  overflow-hidden  border-2 bg-slate-900"
        />
      </div>
    </header>
  );
}
