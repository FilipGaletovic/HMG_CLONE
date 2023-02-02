import React from 'react'
import { footerListProducts, footerListAbout, 
        footerListLegal, footerListSocial } from '../constants/index.js'

const Footer = () => {
  return (
    <>
        <div className='footer-container'>
            <section className='footer-section-one'>
                <h2>Hydraulics Mechanics Galetović</h2>
                <p>Registered in England No 2833215</p>
                <p >Registered Office: 
                   Ernesettle, Plymouth, PL5 2SA.
                   Devon, United 
                   Kingdom</p>
                   <p>VAT number: 591 4961 09</p>
                   <p>EORI Number: GB591496109000</p>
            
            </section>
                
            <section className='footer-section-two'>
                <h2>Products</h2>
            {footerListProducts.map((product, index) => (
                    
                       <a href='#' key={product.id} className='hoverP'>
                        {product.name}</a>
                    
                ))}
            </section>

            <section className='footer-section-three'>
                <h2>About</h2>
                {footerListAbout.map((text, index) => (
                    <a href='#' key={text.id} className='hoverP'>
                        {text.name}</a>
                ))}
            </section>

            <section className='footer-section-four'>
                <h2>Legal</h2>
                {footerListLegal.map((text, index) => (
                    <a href='#' key={text.id} className='hoverP'>
                        {text.name}</a>
                ))}
            </section>
            
            <section className='footer-section-five'>
                <h2>Get In Touch</h2>
                <div className='social_images'>
                {footerListSocial.map((image, index) => (
                    <a >
                        <img key={image.id} src={image.image}/>
                    </a>
                ))}
                </div>
            </section>
            </div>
                    
    </>
  )
}

export default Footer