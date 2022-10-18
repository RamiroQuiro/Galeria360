import React from 'react'
import { useOutletContext } from 'react-router-dom';
import H1 from '../../component/H1';
import UseImage from './UseImage';

export default function ConfigConfiguracionGaleria() {

    
    const {handleChange,handleCkeck,handlePaletaColors,guardarConfig,config,setConfig,datos}=useOutletContext()

  return (
    <div className="py-16">
  
    <H1  className="text-gray-200">Configuración de la Galeria</H1>
    <div className=" text-neutral-700 flex flex-col  w-10/12 mx-auto">
      <UseImage config={config} url={datos} setConfig={setConfig} typeImg="imgEvent" />
      <form className="w-8/12 mx-auto  bg-neutral-700 my-5 flex flex-col items-center justify-around py-10  rounded-lg text-gray-200 gap-2">
        <div className="border-gray-200 border-2 p-4 w-8/12 mx-auto items-center text-center rounded my-5">
          <span className="text-gray-200 font-medium text-lg text-center">
            Seleccion de colores
          </span>
          <div className="flex w-full items-center justify-center gap-5">
            <label htmlFor="color1" className="rounded-lg overflow-hidden">
              <input
                value={config?.color1}
                name="color1"
                type="color"
                onChange={handlePaletaColors}
                className={"bg-transparent rounded-full h-12 w-12  p-0.5"}
              />
            </label>
            <label htmlFor="color2">
              <input
                value={config?.color2}
                name="color2"
                type="color"
                onChange={handlePaletaColors}
                className={"bg-transparent rounded-full h-12 w-12  p-0.5"}
              />
            </label>
          </div>
          {/* <div className="w-full mx-auto text-gray-700 flex flex-col items-center mt-5 ">
            <div className="relative inline-block w-10 mr-2 align-middle  select-none">
              <input
              value={config?.dark}
              onChange={handleCkeck}
                type="checkbox"
                name="dark"
                className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="dark"
                name="dark"
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium text-center">
              Modo Oscuro
            </span>
          </div> */}
        </div>
        <div className='w-8/12'>
          <label htmlFor="nombreEvento" className="sr-only">
            Nombre Evento
          </label>
          <div className="">
            <input
              required
              value={config?.nombreEvento}
              name="nombreEvento"
              onChange={handleChange}
              type="text"
              className="w-full p-4 pr-12 text-sm  text-gray-800 border-gray-700 rounded-lg font-medium shadow-sm"
              placeholder="Nombre Evento"
            />
          </div>
        </div>
        <div className='w-8/12'>
          <label htmlFor="rutaEvento" className="sr-only">
            Ruta a la carpeta de la Galeria
          </label>
          <div className="">
            <input
              required
              value={config?.rutaEvento}
              name="rutaEvento"
              onChange={handleChange}
              type="text"
              className="w-full p-4 pr-12  text-gray-800  text-sm border-gray-700 rounded-lg font-medium shadow-sm"
              placeholder="Ruta a la carpeta de la Galeria"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-between">
          <button
          onClick={guardarConfig}
            type="botton"
            name="galeria"
            className="inline-block  px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-800 rounded my-5 border-l-2 hover:bg-blue-500/80 duration-300 "
          >
            Galeria
          </button>
          <button
           onClick={guardarConfig}
          name="slider"
            type="botton"
            className="inline-block  px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-800 rounded my-5 border-l-2 hover:bg-blue-500/80 duration-300 "
          >
            Slider
          </button>
        </div>
      </form>
    </div>
          
    </div>
  )
}
