import React from 'react'
import { useState } from 'react';
import clear from './../assets/clear.svg'

interface TProps {
    maxLength: number;
    text: string;
    handleInput: (text: string) => void;
    clearInput: (text: string) => void;
  }

export default function Input({maxLength, text, handleInput, clearInput}:TProps) {

  return (
    <div className='input-wrapper'>
        <input
            type='text'
            value={text}
            onChange={(e) => handleInput(e.target.value)}
            placeholder='Link without spaces'
            maxLength={maxLength}
        />
        <section className='input-btns'>
            <p>{`${text.length}/${maxLength}`}</p>
            {text.length > 0 && <button onClick={(e) => clearInput(text)}><img src={clear}/></button>}
        </section>
    </div>
  )
}
