import React from 'react'
import '../CSS/HomeCSS/HeaderDivs.css';
import { useEffect } from 'react';

const HeaderButton = () => {
  return (
    <>
        <button className="HeaderButton_container">
            <a href='#section-two_id'>
                <span className='scroll_arrow one'></span>
                <span className='scroll_arrow two'></span>
                <span className='scroll_arrow three'></span>
                </a>
        </button>

    </>
  )
}

export default HeaderButton