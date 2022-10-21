import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { datos, fetcConfig, fetcTxt } from "../../hook/useFetch";
import toast, { Toaster } from "react-hot-toast";
import ModalLoading from "../../component/ModalLoading";
import Footer from "../footer/Footer";
import imgPerfil from "../../assets/doritologo.png"
import ConfigConfiguracionGaleria from "./ConfigConfiguracionGaleria";
import ConfigConfiguracionEmpresa from "./ConfigConfiguracionEmpresa";
import NavBarConfigracion from "./NavBarConfigracion";
import { fecthImages } from "../../hook/usePexelConection";

export default function Config() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({
    nombreEvento: "RamaCode",
    rutaEvento: "www.ramiroquiroga.vercel.appp",
    color1: "#E5D3CF",
    color2: "#E3BCB7",
    dark: false,
    imgEvent: imgPerfil,
    nombreEmpresa:"RamaCode",
    descripcion:"Servicios Informaticos, Paginas y Sistemas Web",
    direccion:"ramiroquiroga.vercel.app/",
    facebook:"ramirochangomoreno",
    instagram:"ramirochangomoreno",
    celular:"3856771992"

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
}).catch((err)=>{
  console.log(err)
  console.log(err.stack)
})
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

  const handleFetchPexel=async(query)=>{
      const respuesta=await fecthImages(query,"square","small")
      if (respuesta) {
        navigate('/galeria')
      }else{
        toast.error('Tema no encontrado, pueba en inglish')
      }
      
  }
  const contextOutlet={
    handleChange:handleChange,
    handlePaletaColors:handlePaletaColors,
    handleCkeck:handleCkeck,
    datos:datos,
    config:config,
   guardarDatosEmpresa,
    setConfig:setConfig, 
    guardarConfig,
    handleFetchPexel
  }
  return (
    <div className="w-full overflow-x-hidden pt-5 text-gray-200 mx-auto bg-neutral-900">
      {!isLoading ? null : <ModalLoading />}

      <Toaster />
      <NavBarConfigracion/>

      <Outlet context={contextOutlet}/>

 
      <Footer />
    </div>
  );
}
