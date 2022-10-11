import React from 'react'

export default function ImgEvent({imgEvent,url}) {
  return (
    <img
              src={`http://${url?.hostname?url?.hostname:url?.IPv4}:4000/upload/${imgEvent}`}
              alt=""
              height={"200px"}
              width={"200px"}
              className="object-cover object-center w-full h-full hover:scale-110 duration-500"
            />
  )
}
