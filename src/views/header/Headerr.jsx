import React from 'react'
import H1 from '../../component/H1'
import NavBar from './NavBar'

export default function Headerr({event,imgEvent}) {
    return (
      <header
    style={{
      background: `linear-gradient(90deg ,${event?.color1} 0%, ${event?.color2} 80% ) `,
    }}
    className={`w-full h-[30vh] px-8 md:px-16 bg-gradient-t from-red-500 to-red-300 relative flex flex-col items-center border-b-4 border-neutral-200/70 justify-end`}>
    <NavBar/>
    <H1 className=" bg-gray-200/50 rounded-md backdrop-blur-sm px-5 py-1  translate-y-12">{event?.nombreEvento}</H1>
    <div className='flex flex-col mx-auto items-center mx-auto w-40 h-40 translate-y-16 justify-center '>
        <div className='rounded-full w-full h-full  overflow-hidden border-2 bg-purple-500'>
          {
          !imgEvent? null
          :
            <img src={imgEvent} alt="" height={"200px"} width={"200px"} className="object-cover object-center hover:scale-110 duration-500" />
          
        }
        </div>
    </div>
</header>
  )

}
