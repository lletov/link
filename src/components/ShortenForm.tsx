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
import { shortenUrlCleanURI } from '../methods/API'


export default function ShortenForm() {
  const { 
    shortenStatus, 
    setShortenStatus, 
    rawLink, 
    setRawLink, 
    clearRawLink, 
    shortLink, 
    setShortLink 
  } = appStore();

  const bigButtonWidth = '12rem';

  function handleInput(text: string) {
    setRawLink(text);
  }
  function clearInput() {
    clearRawLink()
  }

  async function shortenURL(url:string) {
    console.log('url ' + url + ' recieved');
    const noSpacesURL = url.replace(/\s+/g, '');
    try {
      const resultURL = await shortenUrlCleanURI(noSpacesURL);
      setShortLink(resultURL);

    } catch (error) {
      console.log(error)
    }
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

  const errorsList = [
    'Check if the domain is correct',
    'Check if the site is online',
    'Check the address bars and punctuation',
    'The URL may be being used for spam',
    'The URL may have been blocked',
    'The URL may have been reported',
    'The URL was recently shortened',
    'The URL is not allowed',
    'You shortened many URLs in a short time',
  ]

  return (
    <div className='shorten-form'>
        <p>{statuses[shortenStatus].title}</p>
        {shortenStatus === 'input' &&
          <div className='shorten-form-cta'>
              <Input maxLength={80} text={rawLink} handleInput={handleInput} clearInput={clearInput}/>
              <BigButton 
                title='Shorten' 
                path={ShortenIcon} 
                width={bigButtonWidth}
                onClick={() => shortenURL(rawLink)}
                />
          </div>
        }
        {shortenStatus === 'pending' && <ShortenPending/>}
        {shortenStatus === 'error' &&
          <>
            <section className='shorten-result-link error'>
              <p>Error somewhere...</p>
              {/* <ul>
                {errorsList.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul> */}
              </section>
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
            <p className='from-p'>From: {shortLink}</p>
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
