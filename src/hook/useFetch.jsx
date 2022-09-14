export const fetchData=async()=>{
  const response=await fetch('http://localhost:4000/page/0')
  return response.json()
}

export const fetcImg=async(file)=>{
  const response=await fetch('http://localhost:4000/upload',{
    method:"POST",
    body:file
  })
  return response.text()
}
export const fetcTxt=async(file)=>{
  const response=await fetch('http://localhost:4000/upload-config',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:file,
  })
  return response.json()
}
export const fetcQR=async(file)=>{
  const response=await fetch('http://localhost:4000/qr',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:file,
  })
  return response.text()
}