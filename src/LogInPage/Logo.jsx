import React from 'react'
import '../CSS/index.css'
import LogoIMG from '../assets/HMG_LOGO.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo-container'>
        <Link to='/Home'><img src ={LogoIMG}  alt="" className='logoImg'/></Link>
    </div>
  )
}

export default Logo