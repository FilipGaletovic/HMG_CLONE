import React from 'react'
import { useState, useEffect } from 'react';
import ArrowRight from '../assets/arrow.png'




const SliderMain = () => {



  const [step, setStep] = useState(1);
  
  useEffect(() =>{
    if(step === 4){
      setStep(1)
    };
    const interval = setInterval(() => {
      setStep((prevStep) => (
         prevStep+1
         
         ))
      
    }, 3000)
    return () => clearInterval(interval);
   
  }, [step])

 




  return (
    <>
      <div className={`ContainerSlider 
      ${(step === 2) ? 'ContainerSlider2' : 'ContainerSlider'}
      ${(step === 3) ? 'ContainerSlider3' : 'ContainerSlider'}` 
      }
      id='slider'>
        <div className='slider-fade-white'></div>
        <div className='slider-fade-blue'></div>
          
        </div>
     
    </>
  )
}

export default SliderMain