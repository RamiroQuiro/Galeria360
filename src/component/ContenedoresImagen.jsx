import React from 'react'

export default function ContenedoresImagen({linkDescarga,imagen}) {
    return (
        <a href={linkDescarga} target="_blank" className="overflow-hidden m-[2px]">
			<figure className="mx-auto overflow-hidden">
				<img src={imagen} alt="" className="object-center object-cover hover:scale-110 duration-200"/>
			</figure>
		</a>
    )
}
