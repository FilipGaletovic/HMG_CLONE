import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Footer, Logo, MainContainerLogIn } from "./LogInPageExport";
import { NavBar } from "../HomePage/componentExport";
import LogoImg from "../assets/HMG LOGO.png";
import "../CSS/LoginCSS/MainContainerLogIn.css";

const LogInPage = () => {
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
      <MainContainerLogIn />
      <Footer />
    </>
  );
};

export default LogInPage;
