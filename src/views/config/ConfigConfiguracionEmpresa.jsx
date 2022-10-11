import React from "react";
import H1 from "../../component/H1";
import UseImage from "./UseImage";

export default function ConfigConfiguracionEmpresa({handleChange,handleCkeck,handlePaletaColors,guardarConfig,config,setConfig,datos}) {
  return (
    <>
      <H1 className="text-gray-200">Configuracion de tu empresa</H1>
      <div className=" text-neutral-700 flex gap-2 w-10/12 mx-auto">
        <UseImage  config={config} url={datos} setConfig={setConfig} />
        <form className="w-8/12 mx-auto bg-[#B5B7BB] my-5 flex flex-wrap items-center justify-center p-3 border-2 rounded-xl gap-2">
          <div className="flex w-4/5 items-center justify-around ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Nombre Empresa
            </label>
            <div className="">
              <input
              value={config?.nombreEmpresa}
              onChange={handleChange}
                required
                name="nombreEmpresa"
                type="text"
                className="w-full p-2 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
                placeholder="Nombre Empresa"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-around ">
            <label htmlFor="descripcion" className=" font-medium">
              Pequeña descripcion
            </label>
           <textarea value={config?.descripcion}
                onChange={handleChange}
                name="descripcion" id="" cols="30" rows="2"  className="w-full p-2 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"></textarea>
          </div>
          <div className="flex w-4/5 items-center justify-around ">
            <label htmlFor="direccion" className=" font-medium">
              Dirección
            </label>
            <div className="">
              <input
                required
                value={config?.direccion}
                onChange={handleChange}
                name="direccion"
                type="text"
                className="w-full p-2 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
                placeholder="Dirección"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-around ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Facebbok
            </label>
            <div className="">
              <input
                required
                value={config?.facebook}
                onChange={handleChange}
                name="facebook"
                type="text"
                className="w-full p-2 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
                placeholder="Facebook"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-around ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Telefono Celular
            </label>
            <div className="">
              <input
                required
                value={config?.celular}
                onChange={handleChange}
                name="celular"
                type="tel"
                className="w-full p-2 pr-12 text-sm border-gray-700 rounded-lg font-medium shadow-sm"
                placeholder="N° Celular"
              />
            </div>
          </div>
          <button
             onClick={guardarConfig}
            type="botton"
            name="galeria"
            className="inline-block w-10/12 px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-500 rounded-lg border-b-2 border-x-2 hover:bg-blue-500/80 duration-300 "
          >
            Guardar Configuración
          </button>
        </form>
      </div>
    </>
  );
}
