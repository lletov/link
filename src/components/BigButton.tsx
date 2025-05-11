import React from 'react'

interface TProps {
  title?: string;
  path: string;
  width?: string
  onClick?: () => void;
}

export default function BigButton({title, path, width, onClick}: TProps) {
  return (
   <button className='btn-m' style={{width: width}} onClick={onClick}>
        <img src={path} alt={title}/>
        {title && <p>{title}</p>}
    </button>
  )
}
