import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { fetcImg } from "../../hook/useFetch";

export default function UseImage({}) {
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
        console.log(response)
        localStorage.setItem("imgEvent",JSON.stringify(response));
        toast.success('Imagen Subida Correctamente')
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      setIsLoading(false)
    })
  };

  return (
    <form
      onSubmit={submitFile}
      className="w-8/12 mx-auto flex items-center my-16 py-8 rounded-lg px-10 bg-gray-100/70 justify-around"
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
            name="imgEvent"
            id="imgEvent"
            className="hidden"
          />
        </label>
      </div>
      {!preview ? (
        <div className="w-40 h-40 border-2 rounded-full bg-gray-500"></div>
      ) : (
        <div className="w-40 h-40 border-2 rounded-full overflow-hidden bg-gray-500">
          <img
            src={preview}
            alt="hola "
            className=" object-cover w-full h-auto obect-center"
          />
        </div>
      )}
      <button type="submit"  disabled={isLoading} className="disabled:bg-gray-200 inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-500/80 border-b-2 border-x-2 rounded-lg"
            >
        subir
      </button>
    </form>
  );
}
