import React from 'react'
import DefaultButton from './DefaultButton'
import HistoryIcon from './../assets/access_time.svg'
import MenuIcon from './../assets/menu.svg'

export default function Header() {
  return (
    <div className='header'>
        <h2>[LINK]</h2>
        <div className='header-nav'>
            <DefaultButton path={HistoryIcon} title='History'/>
            <DefaultButton path={MenuIcon} square={true}/>
        </div>
    </div>
  )
}
