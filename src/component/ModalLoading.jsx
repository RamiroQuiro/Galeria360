import React from 'react'

export default function ModalLoading() {
  return (
<div>

<div class="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800/70 ">
  <div class="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
    <div class="  flex w-full justify-around items-center relative animate-pulse w-20 h-5 mt-2">
      <div class=" mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div class=" mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div class=" mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div class=" mt-1 w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div class="text-gray-500 text-xs font-black animate-pulse font-medium mt-2 text-center">
      Creando Galeria ....
    </div>
  </div>
  </div>
</div>
  )
}
