import React from 'react'
import { Logo, NavBarMain, HeaderText, HeaderButton } from './componentExport'
import video1 from '../assets/Videos/BackgroundVideo.mp4'
import backgroundImage from '../assets/header_background.jpg'
import '../CSS/HomeCSS/BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <>
    <div className='VideoContainer'>
      <div className="overLay"></div>
      <div className="Content">
            <Logo />
            <NavBarMain />
             
    </div>
    <HeaderText />
    <HeaderButton />
        <img src={backgroundImage} alt="" />
        
   
        
    </div>
    </>
  )
}

export default BackgroundVideo