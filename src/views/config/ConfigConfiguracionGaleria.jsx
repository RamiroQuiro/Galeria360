import React from 'react'
import H1 from '../../component/H1';
import UseImage from './UseImage';

export default function ConfigConfiguracionGaleria({handleChange,handleCkeck,handlePaletaColors,guardarConfig,config,setConfig,datos}) {

    
    


  return (
    <div className="border-t-2 pt-10 text-neutral-700">
  
    <H1  className="text-gray-200">Configuración de la Galeria</H1>
    <div className="px-4  mx-auto w-2/3 sm:px-2 lg:px-8">
      <UseImage config={config} url={datos} setConfig={setConfig} />
      <form
        className="max-w-md mx-auto my-20 space-y-10"
      >
        <div className="border-gray-700 border-2 p-4  rounded-lg my-5">
          <span className="text-gray-400 font-medium text-center">
            Seleccion de colores
          </span>
          <div className="flex w-full items-center justify-around">
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
          <div className="w-full mx-auto text-gray-700 flex flex-col items-center mt-5 ">
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
          </div>
        </div>
        <div>
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
              className="w-full p-4 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
              placeholder="Nombre Evento"
            />
          </div>
        </div>
        <div>
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
              className="w-full p-4 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
              placeholder="Ruta a la carpeta de la Galeria"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
          onClick={guardarConfig}
            type="botton"
            name="galeria"
            className="inline-block px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-500 rounded-lg border-b-2 border-x-2 hover:bg-blue-500/80 duration-300 "
          >
            Galeria
          </button>
          <button
           onClick={guardarConfig}
          name="slider"
            type="botton"
            className="inline-block px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-500 rounded-lg border-b-2 border-x-2 hover:bg-blue-500/80 duration-300 "
          >
            Slider
          </button>
        </div>
      </form>
    </div>
          
    </div>
  )
}
