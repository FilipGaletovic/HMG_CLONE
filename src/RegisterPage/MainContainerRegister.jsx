import React from 'react'
import '../CSS/index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { SubMenuService } from '../constants'

export const LOCAL_STORAGE_KEY_REGISTER = 'LoginForm'



const sampleRegistration = [{
            id: 1,
            username: 'Fila',
            password: 'perobitanga',
            company: 'HMG',
            country: 'Croatia'
}
]

const MainContainerRegister = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCoutry] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState();

    const [registerInfo, setRegisterInfo] = useState ( () =>  {

        const registerJSON = localStorage.getItem(LOCAL_STORAGE_KEY_REGISTER)
        
          return JSON.parse(registerJSON)
        
}
        )

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_REGISTER, JSON.stringify(registerInfo))
    }, [registerInfo])
    
    
        
    

    const validate = (username, password, country, company, [newUser]) => {
        if(username === '' || username === null){
            alert('Please Enter Valid Information')
        }else if(password === '' || password === null){
            alert('Please Enter Valid Information')
        }else if(country === '' || country === null){
            alert('Please Enter Valid Information')
        }
        if(company === '' || company === null){
            company === 'no company'
        }
        if(password.length > 20 || password.length < 5){
            alert('Please provide a password with minimum of 5 and max 20 characters')
        }else {
            setRegisterInfo([newUser])
            setSuccess(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: 2,
            username: username,
            password: password,
            emal: email,
            company: company,
            country: country
        }
        setUsername('');
        setPassword('');
        setCompany('');
        setCoutry('');
        validate(username, password, country, company, [newUser])
    
    }
    if(success == true){
    setTimeout(function(){
        var element = document.getElementById('loaderId')
        element.classList.add('loaderFinish')
    }, 2000)
}

  return (
    <>
        <div className='Container registerCon'>
            <div className='ContentContainer registerConCon'>
                <h2>Create An Account</h2>

                {success ? (

                    <div>
                        <div className='succcessScreen' id='showSuccScreen'>
                            <h3>Registration successful</h3>
                        </div>
                    
                       
                        <div className='Loader' id='loaderId' onLoad={setTimeout(function() {
                        window.location.replace('/Login');
                        
                      }, 5000)}>
                         
                      </div>
                      <div id='check' onLoad={setTimeout(function (){
                        var element = document.getElementById('check')
                        element.classList.add('checkmark')
                        element.classList.add('draw')
                      }, 2000)}></div>
                      </div>
                    
                ) : (
                
                <form>
                    <label className='item1'>Username</label>
                    <input 
                        type='text' 
                        className='inputFocus item1_1'
                        id='username'
                        autoComplete='off'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                     
                    <label className='item2'>Password</label>
                    <input 
                        type="password" 
                        id='password'
                        className='inputFocus item2_2'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <label className='item3'>Confirm password</label>
                    <input 
                        type="password" 
                        id='passwordConfirm'
                        className='item3_3 inputFocus'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <label className='span2 item4'>Email</label>
                    <input 
                        type="text" 
                        id='email'
                        className='item4_4 inputFocus'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    
                    
                    <label className='item5'>Company</label>
                    <input 
                        type='text'
                        id='company'
                        className='item5_5 inputFocus'
                        autoComplete='off'
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                    
                    />

                    <label className='item6'>Country</label>
                    <input 
                        type='text'
                        id='country'
                        className='item6_6 inputFocus'
                        autoComplete='off'
                        onChange={(e) => setCoutry(e.target.value)}
                        value={country}
                        required
                    />
                    <button onClick={handleSubmit} className='btnRegister'>Register</button>
                    
                </form>
                
                
               
                )}

            </div>
           
        </div>
    </>
  )
}

export default MainContainerRegister