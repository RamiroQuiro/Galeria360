import React from "react";
import { useOutletContext } from "react-router-dom";
import H1 from "../../component/H1";
import UseImage from "./UseImage";

export default function ConfigConfiguracionEmpresa() {

  const {handleChange,handleCkeck,handlePaletaColors,guardarDatosEmpresa,config,setConfig,datos}=useOutletContext()
  return (
    <div className="min-h-screen py-16">
      <H1 className="text-gray-200">Configuracion de tu empresa</H1>
      <div className=" text-neutral-700 flex flex-col  w-10/12 mx-auto">
        <UseImage  config={config} url={datos} setConfig={setConfig} typeImg={"imgEmpresa"}/>
        <form className="w-8/12 mx-auto  bg-neutral-700 my-5 flex flex-wrap items-center justify-around py-10  rounded-lg text-gray-200 gap-2">
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Nombre Empresa
            </label>
            <div className="">
              <input
              value={config?.nombreEmpresa}
              onChange={handleChange}
                disabled
                name="nombreEmpresa"
                type="text"
                className=" w-full p-2 pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "
                placeholder="Nombre Empresa"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="descripcion" className=" font-medium">
              Pequeña descripcion
            </label>
           <textarea value={config?.descripcion}
           disabled
                onChange={handleChange}
                name="descripcion" id="" cols="30" rows="2"   className=" w-full p-2 text-right pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "></textarea>
          </div>
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="direccion" className=" font-medium">
              Dirección
            </label>
            <div className="">
              <input
                disabled
                value={config?.direccion}
                onChange={handleChange}
                name="direccion"
                type="text"
                className=" w-full p-2 pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "
                placeholder="Dirección"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Facebook
            </label>
            <div className="">
              <input
                disabled
                value={config?.facebook}
                onChange={handleChange}
                name="facebook"
                type="text"
                className=" w-full p-2 pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "
                placeholder="Facebook"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Instagram
            </label>
            <div className="">
              <input
                disabled
                value={config?.instagram}
                onChange={handleChange}
                name="instagram"
                type="text"
                className=" w-full p-2 pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "
                placeholder="Instagram"
              />
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-between ">
            <label htmlFor="nombreEvento" className=" font-medium">
              Telefono Celular
            </label>
            <div className="">
              <input
                disabled
                value={config?.celular}
                onChange={handleChange}
                name="celular"
                type="tel"
                className=" w-full p-2 pr-12 text-sm text-gray-700  border-gray-700 rounded font-medium "
                placeholder="N° Celular"
              />
            </div>
          </div>
          <button
             onClick={guardarDatosEmpresa}
            type="botton"
            name="galeria"
            className="inline-block  px-10 py-3 text-sm mx-auto font-medium text-white bg-blue-800 rounded my-5 border-l-2 hover:bg-blue-500/80 duration-300 "
          >
            Guardar Configuración
          </button>
        </form>
      </div>
    </div>
  );
}
