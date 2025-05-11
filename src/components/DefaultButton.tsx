import React from 'react'

interface TProps {
  title?: string;
  path: string;
  square?: boolean;
}

export default function DefaultButton({title, path, square}: TProps) {
  return (
   <button className={`btn ${square ? 'square' : ''}`}>
        <img src={path} alt={title}/>
        {title && <p>{title}</p>}
    </button>
  )
}
