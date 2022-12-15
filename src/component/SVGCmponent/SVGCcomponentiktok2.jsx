import * as React from "react"

const SvgComponent = ({className,image,url,onClik,like,likes,handlePerfil,handleDownload,handleMutedVideo,muted}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 31.53 160.45"
    className={className}
      >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={0.52}
        y1={15.76}
        x2={31.01}
        y2={15.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5b77b9" />
        <stop offset={1} stopColor="#6aaadd" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1={6.77}
        y1={147.46}
        x2={24.76}
        y2={147.46}
        xlinkHref="#linear-gradient"
      />
      <clipPath id="clip-path">
        <path
          d="M31 15.77A15.25 15.25 0 1 1 15.77.52 15.24 15.24 0 0 1 31 15.77Z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".cls-4,.cls-7{fill:#fff}.cls-5{fill:#e83186}.cls-7{font-family:Rockwell-Bold,Rockwell;font-weight:700;font-size:5.08px}"
        }
      </style>
    </defs>
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
      
        <g onClick={handlePerfil} className='cursor-pointer  origin-center duration-150'>
        <g
          style={{
            clipPath: "url(#clip-path)",
          }}
        >
      <image href={image} x="-2" y="-5" width="50" height="50" className="rounded-full w-10 h-10 object-cover object-center"/>
        </g>
        <path
          className="cls-4"
          d="M15.77 31.53a15.77 15.77 0 1 1 15.76-15.76 15.78 15.78 0 0 1-15.76 15.76Zm0-30.53a14.73 14.73 0 1 0 14.72 14.77A14.75 14.75 0 0 0 15.77 1Z"
        />
        <path className="fill-red-500" d="M31 28.73a7 7 0 1 1-7-7 7 7 0 0 1 7 7Z" />
        <path
          className="cls-4"
          d="M28.13 27.69h-3.11v-3.11h-2.09v3.11h-3.11v2.08h3.11v3.11h2.09v-3.11h3.11v-2.08z"
          />
          </g>
        <path
        onClick={onClik}
          className={` cursor-pointer  origin-center  duration-200 ${like?'fill-gray-100': ' fill-red-500 scale-110'}`}
          d="m15.77 65.51-6.2-6.4-.23-.24-.15-.19a4.27 4.27 0 0 1-1-2.75 4.37 4.37 0 0 1 7.58-3 4.36 4.36 0 0 1 6.58 5.73l-.13.16-.28.29Z"
        />
        <text
          transform="matrix(1 0 0 1 9 75)"
          style={{
            fontFamily: "Rockwell-Bold,Rockwell",
            fontWeight: 400,
            fontSize: ".5em",
            fill: "#fff",
          }}
        >
          {'250'}
        </text>
      
        <g onClick={handleDownload} className="cursor-pointer hover:scale-105 origin-center duration-150">

        <path
          className="cls-4"
          d="M8.2 120.62s-.53-6.9 7.3-6.9v-3.85l7.84 5.77-7.57 4.41v-3s-4.77-1.59-7.57 3.57Z"
          />
        <text
        style={{
          fontFamily: "Rockwell-Bold,Rockwell",
          fontWeight: 400,
          fontSize: ".4em",
          fill: "#fff",
        }}
        className="cls-7" transform="translate(0 127.95)">
          {"Descargar"}
        </text>
           </g>
    <g
    onClick={handleMutedVideo}
    className="cursor-pointer  origin-center duration-150"
    >
        <path
          d="M28.75 147.46a13 13 0 1 1-13-13 13 13 0 0 1 13 13Z"
          style={{
            opacity: 0.5,
            fill: "#fff",
          }}
          />
        <path
          d="M24.76 147.46a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"
          style={{
            fill: "url(#linear-gradient-2)",
          }}
          />
        {muted?
          <path
          style={{
            transform:"translate(6px, 138px) scale(65%)"

          }}
          fill="#fefefe"
          d="M13.981,0C6.258,0,0,6.259,0,13.98s6.258,13.983,13.981,13.983s13.982-6.262,13.982-13.983S21.705,0,13.981,0z
			 M13.981,1.432c6.933,0,12.553,5.616,12.553,12.549c0,2.807-0.936,5.391-2.492,7.479l-3.938-3.204V6.472L10.99,7.949v2.898
			l-6.383-5.19C6.904,3.07,10.247,1.432,13.981,1.432z M12.223,11.851l0.002-0.682L18.9,9.947v7.333L12.223,11.851z M1.432,13.98
			c0-2.417,0.694-4.669,1.881-6.584l7.677,6.243v5.267c-0.478-0.168-1.045-0.196-1.628-0.052c-1.291,0.323-2.138,1.391-1.889,2.38
			c0.143,0.917,1.497,1.533,2.785,1.211c1.137-0.285,1.93-1.144,1.933-2.019h0.002l0.02-5.793l3.954,3.216
			c-0.651,0.491-1.003,1.203-0.831,1.887c0.25,1.002,1.51,1.55,2.816,1.225c0.455-0.117,0.845-0.307,1.155-0.557l3.297,2.681
			c-2.247,2.132-5.278,3.448-8.622,3.448C7.05,26.533,1.432,20.911,1.432,13.98z"/>
        :
          <path
          className="cls-4"
          d="M18.69 143.59a.25.25 0 0 0-.25-.25h-4.58a.25.25 0 0 0-.25.25v6.27a1.52 1.52 0 0 0-.81-.24 1 1 0 1 0 0 2 1.21 1.21 0 0 0 1.25-.83.22.22 0 0 0 .06-.14v-5.67h4.08v3.22a1.53 1.53 0 0 0-.79-.22 1 1 0 1 0 0 2 1.16 1.16 0 0 0 1.29-1Z"
          />}
          </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
