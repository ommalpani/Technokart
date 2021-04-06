import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import './styles/Login.css'
import * as api from '../api'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [redirect, setRedirect] = useState('');

    const submitHandler = async () => {
        const user = {
            username: username,
            email: email,
            password: password
        }

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(user.email)) {
            toast.error("Please enter valid email address.", { position: "bottom-right" })
            return ;
        }


        const { data } = await api.register(user);

        if (data == "user_present") {
            toast.error("Username already exists!!! Please login", { position: "bottom-right" })
            return ;
        }


        toast.success("Registered Successfully", { position: "bottom-right" });
        setRedirect(<Redirect to='/login'></Redirect>)
    }

    let showHide;
    let password_icon;
    if (showPassword) {
        showHide = "text";
        password_icon = <FontAwesomeIcon
            onClick={() => setShowPassword(false)}
            className="form-icon eye-icon" icon={faEyeSlash}></FontAwesomeIcon>
    }
    else {
        showHide = "password";
        password_icon = <FontAwesomeIcon
            onClick={() => setShowPassword(true)}
            className="form-icon eye-icon"
            icon={faEye}></FontAwesomeIcon>
    }


    return (
        <div className="outer-form-container2">
            <div className="form-container2">
                <h1>Register</h1>
                <div className="inner-container">
                    <FontAwesomeIcon className="form-icon" icon={faUser}></FontAwesomeIcon>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"></input>
                </div>
                <div className="inner-container">
                    <FontAwesomeIcon className="form-icon" icon={faEnvelope}></FontAwesomeIcon>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"></input>
                </div>
                <div className="inner-container">
                    <FontAwesomeIcon className="form-icon" icon={faLock}></FontAwesomeIcon>
                    <input
                        type={showHide}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"></input>
                    {password_icon}
                </div>
                <button onClick={submitHandler}>REGISTER</button>
                <Link to='/login'>Already a user ? Login here</Link>
            </div>
            {redirect}
        </div>
    )
}

export default Register
