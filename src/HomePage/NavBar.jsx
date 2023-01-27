import React from 'react'
import '../CSS/index.css'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'


import {navBar, SubMenuAbout, SubMenuProducts, SubMenuService} from '../constants/index'

const NavBar = () => {






  return (
    <>
   
    
    <nav className='navBar'>
        <ul>
          
            <li className="liHome">
              <a href='/'>Home</a>
            </li>
            
            <li className="liProducts">
              <a href=''>Products</a>
            </li>
            <li className="liService">
              <a href=''>Service</a>
            </li>
            <li className="liAbout">
              <a href=''>About</a>
            </li>

          <li>
            <Link to='/Login' className='btnLink'>
                <button className='contactBtn'>Contact Us</button>
            </Link>
          </li>
          <li>
            <Link to='/Login' className='btnLink'>
              <button className='loginBtn' id='logBtn'>Log In</button>
              </Link>
          </li>
          </ul>
      </nav>
      
    </>
  )
}

export default NavBar
