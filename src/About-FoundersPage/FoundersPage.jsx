import React from 'react'
import { NavBar, Logo, Footer } from '../HomePage/componentExport'
import '../CSS/HomeCSS/Logo.css'
import '../CSS/FoundersCSS/MainContainerFounders.css'
import ImageAbout from '../assets/about-image.jpg'
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
const AboutPage = () => {

    useEffect(() => {
      Aos.init({duration: 1000});
  }, [])

  return (
    <>

    <div className="Container-about">

        <div className="Logo-about">
            <div className="Logo_container">
            <Logo />
            </div>
            <NavBar />
        </div>
        <div className="content-container">

        
            <div className="Container-text"
                 data-aos="fade-right"
                 data-aos-duration="700">
            <h1>Who are we</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eius minus beatae alias perferendis. <br /> Laudantium cum
                  aperiam rerum libero. Voluptatem, omnis!
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius impedit sequi nesciunt illo, nihil aliquam neque fuga facilis deleniti. Veritatis rem magni non pariatur? Aliquam veniam debitis, atque itaque officia fugit, amet reprehenderit, repellat ipsa aliquid perferendis ad corporis ex voluptas quam in saepe placeat laudantium. Repellendus illo possimus autem. Error laborum earum nam maxime quaerat, consectetur consequuntur aut magni sed voluptate doloremque repellat provident voluptatibus deleniti optio quia voluptates vel nulla modi ipsum beatae quae eveniet illo nisi? Rerum inventore minima voluptatibus aliquam a suscipit exercitationem ratione. Reiciendis eos debitis tempore sequi vitae recusandae vero maxime molestias incidunt voluptate?
            </p>
            </div>
            <div className="imageContainer" 
                 data-aos="fade-left"
                 data-aos-duration="700"
            >

                <img src={ImageAbout} alt="" />
            </div>
        </div>
        <Footer />
    </div>

    </>
  )
}

export default AboutPage