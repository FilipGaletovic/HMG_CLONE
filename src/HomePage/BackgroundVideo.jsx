import React from 'react'
import { Logo, NavBar, HeaderText, HeaderButton } from './componentExport'
import video1 from '../assets/Videos/BackgroundVideo.mp4'
import '../CSS/HomeCSS/BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <>
    <div className='VideoContainer'>
      <div className="overLay"></div>
      <div className="Content">
            <Logo />
            <NavBar />
            
    </div>
    <HeaderText />
    <HeaderButton />
        <video src={video1} autoPlay loop muted/>
        
        
    </div>
    </>
  )
}

export default BackgroundVideo