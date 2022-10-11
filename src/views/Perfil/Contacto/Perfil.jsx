import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Perfil() {

    const [event,items,url]=useOutletContext()
const navigate=useNavigate()
    const handleClose=()=>{
        navigate(-1)
    }
  return (
    <div
    style={{
      background: `linear-gradient(45deg ,#316DCA 0%,#FF2000 80% ) `,
    }}
    className="w-full h-full overflow-hidden mx-auto flex items-stretch justify-center"
  >
    <div className="w-screen md:w-2/6 h-screen bg-gray-100 backdrop-blur-sm mx-auto flex flex-col items-center justify-around">
      <div className="ml-3 h-7 flex justify-end items-center">
        <button
        onClick={handleClose}
          type="button"
          className="bg-gray-100 dark:bg-gray-700 m-1 p-3 justify-end rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
        >
          <span className="sr-only">Close panel</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
s          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="bg-green-300 w-full shadow-lg pb-3 rounded-b-3xl">
        <div className="flex  rounded-b-3xl bg-gray-100 gap-5 flex-col items-center py-7">
          <img
            className="h-28 w-28 rounded-full"
            src={`http://${url?.IPv4}:4000/upload/${event?.imgEvent}`}
            alt="User"
          />
            <p className="text-x1 font-bold text-center upeercase">{event?.nombreEmpresa}</p>
            <p className="text-x1 font-bold text-center ">{event?.descripcion}</p>
        </div>
        <div className="flex px-7 py-2  items-center justify-around  gap-4  ">
          <div className="col-span-1 flex flex-col items-center ">
            <span className="text-2xl font-bold dark:text-gray-500">{event?.celular}</span>
            <span className="text-lg font-medium 0">Celular</span>
          </div>
          <div className="col-span-1 px-3 flex flex-col items-center ">
            <span className="text-2xl font-bold dark:text-gray-500">{event?.direccion}</span>
            <span className="text-lg font-medium">Plan</span>
          </div>
          
        </div>
      </div>

     <div className="w-full flex flex-wrap items-center justify-around gap-2">
        <div>facebbok</div>
        <div>instagram</div>
        <div>tiktok</div>
     </div>

      <div className="flex mx-auto mt-3 w-100 ">
        <a href="">
          {" "}
          <button className="p-2 shadow-lg rounded-2xl tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">
            Mandar WhatsApp
          </button>
        </a>
      </div>
    </div>
    </div>
  );
}
