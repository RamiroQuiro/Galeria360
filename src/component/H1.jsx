import React from 'react'

export default function H1({className,children}) {
  return (
    <h1 className={`${className} text-center text-2xl font-bold -skew-x-6`}>{children}</h1>
  )
}
