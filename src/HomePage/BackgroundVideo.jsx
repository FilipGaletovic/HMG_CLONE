import React from 'react'
import { Logo, NavBar } from './componentExport'
import video1 from '../assets/Videos/BackgroundVideo.mp4'
import '../CSS/BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <>
    
    <div className='VideoContainer'>
      <div className="overLay"></div>
    <div className="Content">
            <Logo />
            <NavBar />
    </div>
        <video src={video1} autoPlay loop muted/>
        
        
    </div>
    </>
  )
}

export default BackgroundVideo