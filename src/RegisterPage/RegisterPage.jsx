import React from "react";
import { Link } from "react-router-dom";
import { Footer, Logo, NavBar } from "../HomePage/componentExport";
import MainContainerRegister from "./MainContainerRegister";
import LogoImg from "../assets/HMG LOGO.png";
import "../CSS/HomeCSS/NavBar.css";

const RegisterPage = () => {
  return (
    <>
      <div className="navLogin">
        <NavBar />
      </div>
      <div className="imgContainer">
        <Link to="/Home">
          <img src={LogoImg} alt="" className="LogoImgLogin" />
        </Link>
      </div>
      <MainContainerRegister />
      <Footer />
    </>
  );
};

export default RegisterPage;
