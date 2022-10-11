import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { datos, fetcConfig, fetcTxt } from "../../hook/useFetch";
import toast, { Toaster } from "react-hot-toast";
import ModalLoading from "../../component/ModalLoading";
import Footer from "../footer/Footer";
import ConfigConfiguracionGaleria from "./ConfigConfiguracionGaleria";
import ConfigConfiguracionEmpresa from "./ConfigConfiguracionEmpresa";

export default function Config() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({
    nombreEvento: "",
    rutaEvento: "",
    color1: "#E5D3CF",
    color2: "#E3BCB7",
    dark: false,
    imgEvent: "",
    nombreEmpresa:"",

  });

  useEffect(() => {
    const configuraciones = async () => {
      const respuesta = fetcConfig().then((data) => setConfig(data));
    };
    configuraciones();
  }, []);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleCkeck = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.checked });
  };

  const handlePaletaColors = (e) => {
    e.preventDefault();
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

const guardarDatosEmpresa=(e)=>{
e.preventDefault()
fetcTxt(JSON.stringify(config)).then((data)=>{
  console.log(data)
  toast.success('Datos Guardados ')
}).catch((err)=>{console.log(err)})
}

  const guardarConfig = (e) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem("config", JSON.stringify(config));
    fetcTxt(JSON.stringify(config))
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          if (e.target.name == "galeria") {
            navigate("/galeria");
          } else {
            navigate("/slider");
          }
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full overflow-x-hidden pt-5 text-gray-200 mx-auto bg-[#22272E]">
      {!isLoading ? null : <ModalLoading />}

      <Toaster />
      <ConfigConfiguracionEmpresa 
         handleChange={handleChange}
         handlePaletaColors={handlePaletaColors}
         handleCkeck={handleCkeck}
         datos={datos}
         config={config}
         guardarConfig={guardarDatosEmpresa}
         setConfig={setConfig}
         key="1"
      />
      <ConfigConfiguracionGaleria
        handleChange={handleChange}
        handlePaletaColors={handlePaletaColors}
        handleCkeck={handleCkeck}
        datos={datos}
        config={config}
        guardarConfig={guardarConfig}
        setConfig={setConfig}
        key="2"
      />
      <Footer />
    </div>
  );
}
