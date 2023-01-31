import React from 'react'
import '../CSS/HeaderDivs.css';
import { useEffect } from 'react';

const HeaderButton = () => {
  return (
    <>
        <button className="HeaderButton_container">
            
                <span className='scroll_arrow one'></span>
                <span className='scroll_arrow two'></span>
                <span className='scroll_arrow three'></span>
            
        </button>

    </>
  )
}

export default HeaderButton