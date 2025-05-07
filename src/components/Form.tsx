import React from 'react'
import { useState } from 'react'
import BigButton from './BigButton'
import ShortenIcon from './../assets/view_in_ar.svg'
import clear from './../assets/clear.svg'

interface TProps {
    maxLength: number;
  }

export default function Form({maxLength}:TProps) {

  const [text, setText] = useState('');


  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
      }
  function clearInput() {
    setText('')
  }

  return (
    <div className='form'>
        <p>Paste your link here</p>
        <div>
            <div className='input-wrapper'>
                <input
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
            <BigButton title='Shorten' path={ShortenIcon}/>
        </div>  
    </div>
  )
}
