import React from 'react'
import '../CSS/HomeCSS/MobileNav.css'

const Hamburger = () => {


  const hamburger_bar = document.getElementById('hamburgerId');

  function handleBurgerBar() {
      hamburger_bar.classList.toggle('is-active');
  }

  return (
    <>
        <div className="hamburgerMenu">
            <button className="hamburger" id='hamburgerId' onClick={handleBurgerBar}>
                <div className="hamburger-bar"></div>
            </button>
        </div>
    </>
  )
}

export default Hamburger