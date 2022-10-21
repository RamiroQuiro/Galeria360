import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { datos,  fetcConfig, fetchData } from "../hook/useFetch";
import useItems from "../hook/useItems";
import { Outlet } from "react-router-dom";





export default function Layout() {
  const [movil, setMovil] = useState(false)
  const [itemsPexel, setItemsPexel] = useState(null)
  const { data: data, error, isLoading } = useQuery(["images"], fetchData);
  const { data: config } = useQuery(["config"], fetcConfig);
  const [items] = useItems(data);
  const [url, setUrl] = useState({})

  const [event, setEvent] = useState(null);


  
  useEffect(() => {
    const url=async()=>{
      setUrl(datos) 
    }
    url()
    const traerDatos = () => {
      setEvent(config);
    };
    traerDatos();
  }, [config]);
  
useEffect(() => {
  let navegador = navigator.userAgent;
        if (navegador.match(/Android/i) || navegador.match(/webOS/i) || navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i) || navegador.match(/BlackBerry/i) || navegador.match(/Windows Phone/i)) {
          setMovil(true);
        } else {
            setMovil(false)
        }

const iterarPexel=()=>{
  const local=localStorage.getItem('fetchPEXEL')
  setItemsPexel(JSON.parse(local))
}
iterarPexel()

}, [])

  return (
    <div className="bg-neutral-900  w-full relative mx-auto text-neutral-700 flex flex-col items-center justify-center">
     <Outlet 
     context={[event,items,url,movil]}
     />
    </div>
  );
}
