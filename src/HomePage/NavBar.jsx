import React from 'react'
import '../CSS/index.css'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'

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
              
              <ul className='submenu subOne'>
              {SubMenuProducts.map((product, index) =>(
                <li key={product.id}>
                  <a href={`${product.url}`}>{product.title}</a>
                </li>
              ))}
              </ul>
            </li>
            <li className="liService">
              <a href=''>Service</a>
              <ul className='submenu subTwo'>
              {SubMenuService.map((service, index) =>(
                <li key={service.id}>
                  <a href={`${service.url}`}>{service.title}</a>
                </li>
              ))}
              </ul>
            </li>
            <li className="liAbout">
              <a href=''>About</a>
              <ul className='submenu subThree'>
              {SubMenuAbout.map((about, index) =>(
                <li key={about.id}>
                  <a href={`${about.url}`}>{about.title}</a>
                </li>
              ))}
              </ul>
            </li>
            
            
          <li>
            <NavLink to='/Login' className='btnLink'>
                <button className='contactBtn'>Contact Us</button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/Login' className='btnLink'>
              <button className='loginBtn'>Log In</button>
              </NavLink>
          </li>
          </ul>
      </nav>
      
    </>
  )
}

export default NavBar
