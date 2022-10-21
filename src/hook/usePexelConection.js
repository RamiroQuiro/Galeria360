//Llave API de Pexel
const API_Key="563492ad6f91700001000001ac0a6fe24db640cc9d1af1e74028455b"


//URL  de conexion

const URL_CONECCTION="https://api.pexels.com/videos/"


// funcion creadora de la peticion 

export const fecthImages=(query,orientation,size)=>{
let url=URL_CONECCTION + `search?query=${query}&orientation=${orientation}&size=${size}`
console.log(url)
const option={
    method:"GET",
    headers:{
        Authorization:API_Key,
    },
}
const data= fetchFrom(url,option).then((data)=> {
    if(data.length==0){
        return false
    }else return true    
})
return data
}

//funcion de conexion

export const fetchFrom=async(url,option)=>{
    const response=await fetch(url,option).then((data)=>{
        return data.json()
    })
    let videosArray=response.videos.map(i=>{
        return i.video_files.find(buscar=>buscar.width=="540")
    })
    localStorage.setItem('fetchPEXEL',JSON.stringify(videosArray))
return videosArray
}



