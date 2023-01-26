import React from 'react';
import '../CSS/index.css';
import {useRef, useState, useEffect, useContext, useSelector} from 'react';
import {Route, Routes, Link} from 'react-router-dom'
const LOGIN_URL = '/auth'
const LOCAL_STORAGE_KEY_LOGIN = 'LoginForm'

const MainContainerLogIn = () => {
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState();
    const [UsernameContext, setUsernameContext] = useState();
    const [PasswordContext, setPasswordContext] = useState();


    const penis = {
        name: 'ita',
        surname: 'banov'
    }
    
    

 
    const registerJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGIN))
    



    useEffect(() => {
        userRef.current.focus();
    }, []);
    
    useEffect(() => {
        setErrMsg('');
    }, [user, password]);

    const userRef = useRef();
    const errRef = useRef();
        
       

    const handleSubmit = (e) =>{
        e.preventDefault();

        setUser('');
        setPassword('');
        validate(user, password)

       
        
        registerJSON.find(id => id.username == user ? setSuccess(true) : setSuccess(false))
        registerJSON.find(ps => ps.password == password ? setSuccess(true) : setSuccess(false))
        registerJSON.find(id => id.username == user ? setUsernameContext(user): setUsernameContext(''))
        registerJSON.find(ps => ps.password == password ? setPasswordContext(password) : setPasswordContext(''))
        }

    const validate = (username, password) =>{
        if(username === '' || username === null){
            alert('Please Enter Username')
            setSuccess(false)
        }else if(password === '' || password === null){
            alert('Please Enter Password')
            setSuccess(false)
        }
        else if(registerJSON == null){
            alert('Please enter an existing account')
            setSuccess(false)
        }
        else{
            setSuccess(true)
        }
        
              
            
        
    }

    
  return (
    <>
        <div className='Container'>
            <div className='ContentContainer'>
                <h2 id='TitleId'>Log In</h2>

                {success ? (
                    <div className='LogInForm'>
                        
                        <div className='LogSuccess' id='LogSuccessId' onLoad={setTimeout(function() {
                        window.location.replace('/Home');
                      }, 5000)}><h2>Redirecting...</h2></div>
                        
                        
                      <div className='LoaderLogin'></div>
                      

                    </div>
                ) : (
                <div className='LogInForm'>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}
                  aria-live='assertive'  >{errMsg}</p>
                  
                    <form>
                    <label className='labele'>Username</label>
                        <input 
                            className='inputUser'
                            type='text' 
                            id="username" 
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </form>
                    <form >
                        <label className='labele'>Password</label>
                        <input 
                            className='inputPass'
                            type='password' 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </form>

                    <button onClick={handleSubmit} className='LogBtn'>Log In</button>

                    <p>
                        Don't Have An Account?
                        <br />   
                        <span className='line'>
                           <Link to='/Register'>Register</Link>
                        </span>
                    </p>
                </div>
                )}
            </div>
        </div>
    </>
  )
                }


const sampleLogInfo = [
    {
        id:1,
        username: 'Filip',
        password: 'perobita',
        Company:'18',
        Country: 'jobless',

    }
]




export default MainContainerLogIn