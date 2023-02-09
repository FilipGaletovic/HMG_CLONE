import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/MobileNav.css'

const MobileNav = () => {
  return (
    
    
    <>
        <div className="MobileList">
        <span className='HomeSpan'></span>
        <button className='liHome'>Home</button>
        <span className='HomeSpan'></span>
        <button className='liProducts'>Products</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentProduct">
          <Link to='/'>Product1</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product2</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product3</Link>
          <span className='subSpan'></span>
        </div>
        <button className='liService'>Service</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentService">
          <Link to='/'>AutoCad deisigns</Link>
          <span className='subSpan'></span>
          <Link to='/'>Third-party purchase</Link>
          <span className='subSpan'></span>
          <Link to='/'>Authentication</Link>
          <span className='subSpan'></span>
          
        </div>
        <button className='liAbout'>About</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentAbout">
          <Link to='/'>Founders</Link>
          <span className='subSpan'></span>
          <Link to='/'>Payment Options</Link>
          <span className='subSpan'></span>
          <Link to='/'>Privacy Policy</Link>
          <span className='subSpan'></span>
        </div>
        <button className='btnMobileList'>
            <Link to='/Contactus'>Contact Us</Link>
        </button>
        <span className='HomeSpan'></span>
        <button className='btnMobileList'>
            <Link to='/Login'>Log In</Link>
        </button>
        <span className='HomeSpan'></span>

           
        </div>
    </>
  )
}

export default MobileNav