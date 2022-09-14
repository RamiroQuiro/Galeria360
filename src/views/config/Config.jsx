import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import H1 from "../../component/H1";
import { fetcTxt } from "../../hook/useFetch";
import { guardarConfiguracion } from "./dataJson";
import UseImage from "./UseImage";

export default function Config() {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    nombreEvento: "",
    rutaEvento: "",
    color1: "#E5D3CF",
    color2: "#E3BCB7",
  });

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handlePaletaColors = (e) => {
    e.preventDefault();
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const guardarConfig = (e) => {
    e.preventDefault();
    localStorage.setItem("config", JSON.stringify(config));
    fetcTxt(JSON.stringify(config))
      .then((response) => {
      setTimeout(()=>navigate('/galeria'),2000)
        console.log("recibido ", response)})
      .catch((err) => console.log(err));
    // navigate("/galeria");
  };
  return (
    <div className="w-screen pt-16 mx-auto">
      <H1>Configuracion de la Galeria</H1>
      <div className="px-4  mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <UseImage />
        <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div className="border-gray-200 border-2 p-4  rounded-lg my-5">
            <h2 className="w-full p-2 pr-12 text text-gray-500 ">
              Seleccion de colores
            </h2>
            <div className="flex w-full items-center justify-around">
              <label htmlFor="color1" className="rounded-lg overflow-hidden">
                <input
                  value={config?.color1}
                  name="color1"
                  type="color"
                  onChange={handlePaletaColors}
                  className={"bg-transparent rounded-full h-24 w-24  p-0.5"}
                />
              </label>
              <label htmlFor="color2">
                <input
                  value={config?.color2}
                  name="color2"
                  type="color"
                  onChange={handlePaletaColors}
                  className={"bg-transparent rounded-full h-24 w-24  p-0.5"}
                />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="nombreEvento" className="sr-only">
              Nombre Evento
            </label>
            <div className="relative">
              <input
                name="nombreEvento"
                onChange={handleChange}
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Nombre Evento"
              />
            </div>
          </div>
          <div>
            <label htmlFor="rutaEvento" className="sr-only">
              Ruta a la carpeta de la Galeria
            </label>
            <div className="relative">
              <input
                name="rutaEvento"
                onChange={handleChange}
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Ruta a la carpeta de la Galeria"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={guardarConfig}
              type="submit"
              className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
