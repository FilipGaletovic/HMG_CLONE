import React from 'react'
import {
    NavBar, Logo, SliderMain, MainContainer, ProductInfo,
    Footer, ProductButton
} from './componentExport'

const HomePage = () => {
  return (
    <>
        <Logo />
        <NavBar/>
        <SliderMain />
        <MainContainer />
        <Footer />
    
    </>
  )
}

export default HomePage