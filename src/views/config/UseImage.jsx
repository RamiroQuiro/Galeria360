import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetcImg } from "../../hook/useFetch";

export default function UseImage({config,setConfig,url,typeImg}) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const submitFile = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData= new FormData()
    formData.append('imgEvent',file)
    fetcImg(formData)
      .then((response) => {
        setConfig({...config,[typeImg]:response})
        localStorage.setItem(typeImg,JSON.stringify(response));
        toast.success('Imagen Subida Correctamente')
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Hubo un error, reintente nuevamente')
      setIsLoading(false)
    })
  };

  return (
    <form
      onSubmit={submitFile}
      className="w-8/12 mx-auto flex items-center my-16 py-8 rounded-lg px-10 bg-neutral-700 justify-around"
    >
      <div>
        <label
          htmlFor="imgEvent"
          className="text-gray-500/70 bg-white capitalize cursor-pointer word-break hover:text-white hover:bg-blue-500 text-sm border-gray-200/50 p-4 border-b-2 border-x-2 rounded hover:-translate-y-1 hover:shadow-sm duration-300"
        >
          subir imagen del evento
          <input
            onChange={handleFile}
            type="file"
            name={typeImg}
            id="imgEvent"
            className="hidden"
          />
        </label>
      </div>
      {
      !preview ? (
        <div className="w-40 h-40 border-2 rounded-full overflow-hidden bg-gray-500">
         <img
             src={`http://${url?.IPv4}:4000/upload/${config?.[typeImg]}`}
             alt="Perfil "
             className=" object-cover w-full h-auto obect-center"
           />
         </div>
      ) : (
        <div className="w-40 h-40 border-2 rounded-full overflow-hidden bg-gray-500">
          <img
            src={preview}
            alt="hola "
            className=" object-cover w-full h-auto obect-center"
          />
        </div>
      )}
      <button type="submit"  disabled={isLoading}   className="inline-block  px-10 py-3 text-sm  font-medium text-white bg-blue-800 rounded my-5 border-l-2 hover:bg-blue-500/80 duration-300 "
            >
        Subir
      </button>
    </form>
  );
}
