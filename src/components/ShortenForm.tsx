import React from 'react'
import BigButton from './BigButton'
import ShortenIcon from './../assets/view_in_ar.svg'
import Input from './Input'
import appStore from '../store/AppStore';


export default function ShortenForm() {
  const { shortenStatus, setShortenStatus, clearText } = appStore();

  const statuses = {
    input: {
      title: 'Paste your link here',
    },
    pending: {
      title: 'Few moments, making magic..',
    },
    resolved: {
      title: 'Success! Here is your short link',
    },
    error: {
      title: 'Oops, something gone wrong!',
    }
  }

  return (
    <div className='shorten-form'>
        <p>{statuses[shortenStatus].title}</p>
        {/* <p className='error-text'>Error! Paste your link here</p> */}
        <div className='shorten-form-cta'>
            <Input maxLength={80}/>
            <BigButton title='Shorten' path={ShortenIcon} width={'12rem'}/>
        </div>
    </div>
  )
}
