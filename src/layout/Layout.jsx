import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { datos,  fetcConfig, fetchData } from "../hook/useFetch";
import useItems from "../hook/useItems";
import { Outlet } from "react-router-dom";
export default function Layout() {
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

  return (
    <div
      className={`${
        config?.dark ? "bg-[#1C2128]" : "bg-sky-100 "
      } w-full relative mx-auto text-neutral-700 flex flex-col items-center justify-center`}
    >
     <Outlet 
     context={[event,items,url]}
     />
    </div>
  );
}
