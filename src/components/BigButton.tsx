import React from 'react'

interface TProps {
  title?: string;
  path: string;
}

export default function BigButton({title, path}: TProps) {
  return (
   <button className='btn-m'>
        <img src={path} alt={title}/>
        {title && <p>{title}</p>}
    </button>
  )
}
