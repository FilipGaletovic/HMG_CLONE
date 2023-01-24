import React from 'react'
import styles from './styles'
import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import LogInPage from './LogInPage/LogInPage';
import RegisterPage from './RegisterPage/RegisterPage';


 const App = () => (
    <>
      <Routes>
      <Route path='/' element={ <HomePage />}/>
        <Route path='/Home' element={ <HomePage />}/>
        <Route path='/Login' element={<LogInPage />}/>
        <Route path='/Register' element={ <RegisterPage /> } />
      </Routes>
      
      
      
        
      

      </>
  
 );
 export default App

