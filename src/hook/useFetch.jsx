// import { hostname,IPv4 } from "../../../ServerGaleria360/HostName.json";

export const datos={
  hostname:"",
  IPv4:"192.168.0.1"
}



export const fetchData=async()=>{
  const response=await fetch(`http://${datos?.IPv4}:4000/page/0`)
  return response.json()
}
export const fetcConfig=async()=>{
  const response=await fetch(`http://${datos?.IPv4}:4000/config`)
  return response.json()

}

export const fetcImg=async(file)=>{
  const response=await fetch(`http://${datos?.IPv4}:4000/upload`,{
    method:"POST",
    body:file
  })
  return response.text()
}
export const fetcTxt=async(file)=>{
  const response=await fetch(`http://${datos?.IPv4}:4000/upload-config`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:file,
  })
  return response.json()
}
export const fetcQR=async(file)=>{
  const response=await fetch(`http://${datos?.IPv4}:4000/qr`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:file,
  })
  return response.text()
}