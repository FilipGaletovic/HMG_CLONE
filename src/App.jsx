import React from 'react'
import styles from './styles'
import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import LogInPage from './LogInPage/LogInPage';
import RegisterPage from './RegisterPage/RegisterPage';
import AboutPage from './About-FoundersPage/FoundersPage';


 const App = () => (
    <>
    <div>
      <Routes>
      <Route path='/' element={ <HomePage />}/>
        <Route path='/Home' element={ <HomePage />}/>
        <Route path='/About' element={ <AboutPage />}/>
        <Route path='/Login' element={<LogInPage />}/>
        <Route path='/Register' element={ <RegisterPage /> } />
      </Routes>
      </div>
      </>
  
 );
 export default App

