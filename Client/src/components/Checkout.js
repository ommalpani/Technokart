import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/Checkout.css'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'

function Checkout() {

    const user = useSelector(store => store.user);

    
    if(!user._id)
        return <Redirect to = '/login'></Redirect>

    return (
        <div className = "checkout-container">
            <FontAwesomeIcon className = "checkout-icon" icon={faCheckCircle}></FontAwesomeIcon>
            <h1 className = "checkout-message">Order Successfully placed !!!</h1>
            <h1 className = "checkout-message">Order id : {user._id} </h1>

        </div>
    )
}

export default Checkout
