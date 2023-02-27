import React from 'react'
import Paragraph from "./Paragraph";
import "../CSS/PrivacyPolicyCSS/PrivacyPolicy.css";
import Footer from '../HomePage/Footer';
import { Logo, NavBarMain } from '../HomePage/componentExport';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="Logo-about">
            <div className="Logo_container">
            <Logo />
            </div>
            <NavBarMain />
        </div>
      <div className="PP_container">
          <h1>Privacy Policy</h1>
        <div className="PP_text_container">
          <Paragraph />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy