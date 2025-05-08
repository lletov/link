import React from 'react'
import BigButton from './BigButton'
import ShortenIcon from './../assets/view_in_ar.svg'
import Input from './Input'


export default function ShortenForm() {

  return (
    <div className='shorten-form'>
        <p>Paste your link here</p>
        <p className='error-text'>Error! Paste your link here</p>
        <div>
            <Input maxLength={80}/>
            <BigButton title='Shorten' path={ShortenIcon} width={'12rem'}/>
        </div>
    </div>
  )
}
