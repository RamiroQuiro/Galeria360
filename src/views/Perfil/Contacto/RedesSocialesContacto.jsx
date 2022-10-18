import React from 'react'

export default function RedesSocialesContacto({event,image,redSocial}) {
  return (
    <div className="flex flex-wrap  gap-2 items-center justify-around">
            <img
              src={image}
              alt={redSocial}
              className="w-10 h-10 object-cover"
            />
            <a
              href={`https://www.${redSocial}.com/${event}`}
              target="_blank"
            >
              {event}
            </a>
          </div>
  )
}
