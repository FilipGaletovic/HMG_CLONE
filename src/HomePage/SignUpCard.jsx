import React from 'react'
import '../CSS/HomeCSS/SignUpCard.css'

const SignUpCard = () => {
  return (
    <div className='first-p-image' >
                    <img src={first_p_image} alt="" />
                    <button className='first-p-serviceBtn'>Sign Up For Our Service
                        <div className='arrowUp'></div>
                    </button>
                </div>
  )
}

export default SignUpCard