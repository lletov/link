import React from 'react'

interface TProps {
  title?: string;
  path: string;
  width?: string
}

export default function BigButton({title, path, width}: TProps) {
  return (
   <button className='btn-m' style={{width: width}}>
        <img src={path} alt={title}/>
        {title && <p>{title}</p>}
    </button>
  )
}
