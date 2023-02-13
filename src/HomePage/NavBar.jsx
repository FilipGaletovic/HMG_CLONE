import React from 'react'
import '../CSS/index.css'
import '../CSS/HomeCSS/MobileNav.css'
import { useState, useContext, useRef, useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import {Link} from 'react-router-dom'
import {navBar, SubMenuAbout, SubMenuProducts, SubMenuService} from '../constants/index'
import { MobileNav } from './componentExport';
const LOCAL_STORAGE_KEY_LOGIN = 'LoginForm'
const NavBar = () => {

  	const {ref: navRef, inView: navVisible } = useInView()
    const [myAccountText, setMyAccountText] = useState('');
    const [LoginLink, setLoginLink] = useState('/Login');
    
    window.onscroll = function (e) {
      var nav_div = document.getElementById('navbar');
      var invisible = nav_div.offsetTop;
      if(window.pageYOffset > invisible) {
        nav_div.classList.add('navInvisible')
      }else nav_div .classList.remove('navInvisible')
      
    }


    const hamburger = document.getElementById('hamburgerId');
    const mobileNav = document.getElementById('mobileNavId');

    function handleBurger() {
        hamburger.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
    }

    
    
    const registerJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGIN))
    
    useEffect(() => {
      if(registerJSON !== null){
      registerJSON.find(id => id.username !== '' ? setMyAccountText('My Account'): setMyAccountText('Log In'));
      setLoginLink('/my-account')
    }
      else setMyAccountText('Log In')
    }, [])
    
    
  return (
    <>
   
    <div className='navBar' id='navbar' ref={navRef}>
      <Link to='/' className='navHome'>Home</Link>
      <span className='HomeSpan'></span>
      <div className="subNav">
        <button className='subNavBtn-products'>Products</button>
        <div className="subNav-content contentProduct">
          <Link to='/'>Product1</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product2</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product3</Link>
          <span className='subSpan'></span>
        </div>
      </div>
      <div className="subNav">
        <button className='subNavBtn'>Service</button>
        <div className="subNav-content contentService">
          <Link to='/'>AutoCad deisigns</Link>
          <span className='subSpan'></span>
          <Link to='/'>Third-party purchase</Link>
          <span className='subSpan'></span>
          <Link to='/'>Authentication</Link>
          <span className='subSpan'></span>
          
        </div>
      </div>
      <div className="subNav">
        <button className='subNavBtn'>About</button>
        <div className="subNav-content contentAbout">
          <Link to='/About'>Founders</Link>
          <span className='subSpan'></span>
          <Link to='/'>Payment Options</Link>
          <span className='subSpan'></span>
          <Link to='/'>Privacy Policy</Link>
          <span className='subSpan'></span>
        </div>
      </div>
      <Link to='/Login' className='btnLink'>
        <button className='contactBtn'>Contact Us</button>
      </Link>
         
      <Link to={LoginLink} className='btnLink'>
        <button className='loginBtn' id='logBtn'>{myAccountText}</button>
      </Link>

      </div>

      <div className="hamburgerMenu">
            <button 
            className="hamburger" 
            id='hamburgerId'
            onClick={handleBurger}
            >
                <div className="hamburger-bar"></div>
            </button>
        </div>

      <div className='MobileNav' id='mobileNavId'>
        <MobileNav />
      </div>
      
      
    </>
  )
}

export default NavBar
