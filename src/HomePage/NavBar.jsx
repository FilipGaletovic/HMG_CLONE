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
        
          <div className="ulContainer">
            <li className="liHome">
              <a href='/'>Home</a>
              <div className="clipPathBefore"></div>
            </li>
            
            <li>
              <a href=''>Products</a>
              <ul className='dropDown show' id='dropDown'>
                  <li><a>Product1</a></li>
                  <li><a>Product2</a></li>
                  <li><a>Product3</a></li>
                </ul>
            </li>
            
            <li>
              <a href=''>Service</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>

          
            <Link to='/Login' className='btnLink'>
                <button className='contactBtn'>Contact Us</button>
            </Link>
         
            <Link to='/Login' className='btnLink'>
              <button className='loginBtn' id='logBtn'>Log In</button>
              </Link>

             
              </div>
          </ul>

          
      </nav>
      
    </>
  )
}

export default NavBar
