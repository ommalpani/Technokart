import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import * as api from '../api'
import './styles/Login.css'


function Login() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const [message , setMessage] = useState('');



    const submitHandler = async () => {
        const user = {
            username : username, 
            password : password,
            
        }
        const {data} = await api.login(user);


        if(data == "invalid_credentials")
        {
            setMessage("Invalid Credentials");
        }
        else{
            dispatch({type : "LOGIN" , payload : data[0]});
            setMessage(<Redirect to ="/"></Redirect>)
        }
    }

    let showHide;
    let password_icon;
    if (showPassword) {
        showHide = "text";
        password_icon = <FontAwesomeIcon
        onClick = {()=> setShowPassword(false)}
        className="form-icon eye-icon" icon={faEyeSlash}></FontAwesomeIcon>
    }
    else {
        showHide = "password";
        password_icon = <FontAwesomeIcon 
        onClick = {() => setShowPassword(true)}
        className="form-icon eye-icon" 
        icon={faEye}></FontAwesomeIcon>
    }

    

    return (
        <div className="outer-form-container2">
            <div className="form-container2">
                <h1>Login Here</h1>
                <div className="inner-container">
                    <FontAwesomeIcon className="form-icon" icon={faUser}></FontAwesomeIcon>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"></input>
                </div>
                <div className="inner-container">
                    <FontAwesomeIcon className="form-icon" icon={faLock}></FontAwesomeIcon>

                    <input
                        type= {showHide}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"></input>
                        {password_icon}
                </div>
                <h3 className="error">{message}</h3>
                <button onClick={submitHandler}>Login</button>
                <Link to='/register'>New user? Register here.</Link>
            </div>
        </div>
    )
}

export default Login
