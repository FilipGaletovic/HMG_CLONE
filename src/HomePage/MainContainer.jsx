import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import ProductInfo from './ProductInfo';
import Product1 from '../assets/Product1.jpg'
import Product2 from '../assets/Product2.jpg'
import Product3 from '../assets/Product3.jpg'
import first_p_image from '../assets/first-p-image.png'




const MainContainer = () => {
  

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
  
    let ProductText1 = "Product1";
    let ProductText2 = "Product2";
    let ProductText3 = "Product3";
    
    function setDelay(number) {
        document.querySelector('.skill').setAttribute('data-aos-delay', number)
      }
  
    return (
   
        
    <>
        <div className='second-half'>
            <div className='Container-Main'>

                <div className='first-p'>
                    <h2>Quality-Precision-Authentic</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Minus quos ullam explicabo sed
                         consequatur sequi quis maxime libero optio nisi? Mollitia f
                         uga tempora molestiae <br /> <br /> adipisci repellendus doloribus molestias 
                         excepturi hic. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Accusamus facilis illum at blanditiis, minus, 
                         temporibus error eius eveniet ut optio enim repellat maiores 
                         pariatur qui soluta. Adipisci qui voluptas maiores.</p>
                         
                </div>

                <div className='first-p-image' >
                    <img src={first_p_image} alt="" />
                    <button className='first-p-serviceBtn'>Sign Up For Our Service
                        <div className='arrowUp'></div>
                    </button>
                </div>

                <div className='second-p'>
                    <h2>Pre-Modified Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Minus quos ullam explicabo sed
                         consequatur sequi quis maxime libero optio nisi? Mollitia f
                         uga tempora molestiae <br /> <br /> adipisci repellendus doloribus molestias 
                         excepturi hic. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Accusamus facilis illum at blanditiis, minus, 
                         temporibus error eius eveniet ut optio enim repellat maiores 
                         pariatur qui soluta. Adipisci qui voluptas maiores.</p>
                         
                </div>
                <div className='product-list'>
                    <a href='#' data-aos="fade-right" data-aos-once="true">
                        <ProductInfo image={Product1} text={ProductText1}/>
                    </a>

                    <a href='#' data-aos-delay={100} data-aos="fade-right" data-aos-once="true">
                        <ProductInfo image={Product2} text={ProductText2}/>
                    </a>

                    <a href='#' data-aos-delay={200} data-aos="fade-right" data-aos-once="true">
                        <ProductInfo image={Product3} text={ProductText3}/>
                    </a>
                    
                </div>

            </div>
        </div>

   </>
  )
}

export default MainContainer