import React from 'react'
import { useState } from 'react';
import clear from './../assets/clear.svg'

interface TProps {
    maxLength: number;
  }

export default function Input({maxLength}:TProps) {

  const [text, setText] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
          setText(e.target.value);
        }
    function clearInput() {
      setText('')
    }

  return (
    <div className='input-wrapper'>
        <input
            type='text'
            value={text}
            onInput={handleInput}
            placeholder='Link without spaces'
            maxLength={maxLength}
        />
        <div className='input-btns'>
            <p>{`${text.length}/${maxLength}`}</p>
            <button onClick={clearInput}><img src={clear}/></button>
        </div>
    </div>
  )
}
