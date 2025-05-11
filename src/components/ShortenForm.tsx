import React from 'react'
import BigButton from './BigButton'
import DefaultButton from './DefaultButton'
import ShortenPending from './ShortenPending'
import ShortenIcon from './../assets/view_in_ar.svg'
import CopyIcon from './../assets/content_copy.svg'
import HistoryIcon from './../assets/access_time.svg'
import RefreshIcon from './../assets/refresh.svg'
import ReportIcon from './../assets/call_split.svg'
import Input from './Input'
import appStore from '../store/AppStore';
import { useState } from 'react';


export default function ShortenForm() {
  const { shortenStatus, setShortenStatus, rawLink, setRawLink, clearRawLink } = appStore();

  const [text, setText] = useState('');
  const bigButtonWidth = '12rem';

  function handleInput(text: string) {
    setText(text);
  }
  function clearInput() {
    setText('')
  }

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
        {shortenStatus === 'input' &&
          <div className='shorten-form-cta'>
              <Input maxLength={80} text={text} handleInput={handleInput} clearInput={clearInput}/>
              <BigButton title='Shorten' path={ShortenIcon} width={bigButtonWidth}/>
          </div>
        }
        {shortenStatus === 'pending' && <ShortenPending/>}
        {shortenStatus === 'error' &&
          <>
            <section className='shorten-result-link error'><p>Error somewhere...</p></section>
            <div className='instruments-btns'>
              <DefaultButton title='Try again' path={RefreshIcon}/>
              <DefaultButton title='Report problem' path={ReportIcon}/>
            </div>
          </>
        }
        {shortenStatus === 'resolved' &&
          <>
            <div className='shorten-form-cta'>
              <section className='shorten-result-link'><h3>https.;l,fs_23sdfhiuerfidsnfsiudfwisnsidfsd</h3></section>
              <BigButton title='Copy' path={CopyIcon} width={bigButtonWidth}/>
            </div>
            <p>From: https://www.blackmagicdesign.com/products/davinciresolve</p>
            <div className='instruments-btns'>
              <DefaultButton title='History' path={HistoryIcon}/>
              <DefaultButton title='Make another one' path={RefreshIcon}/>
              <DefaultButton title='Copy original link' path={CopyIcon}/>
            </div>
          </>
        }
    </div>
  )
}
