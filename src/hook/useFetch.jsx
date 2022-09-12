export const fetchData=async()=>{
  const response=await fetch('http://localhost:4000/page/0')
  return response.json()
}