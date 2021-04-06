import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './styles/BillingDetails.css'
import { NavLink } from 'react-router-dom'
import { editProfile } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'

function BillingDetails() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const [redirect, setRedirect] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        contact: ''
    })

    const placeOrder = () => {

        if (user.email == "" ||
            user.address == "" ||
            user.pincode == "" ||
            user.city == "" ||
            user.state == "" ||
            user.contact == "") {
            toast.error("Details Missing ! Please Fill all details", { position: "bottom-right" })
            return;
        }

        toast.success("Order Placed Successfully!!!", { position: "bottom-right" })
        setRedirect(<Redirect to='/checkout'></Redirect>)
    }

    const submitHandler = () => {

        if (formData.email == "" || formData.address == "" || formData.pincode == "" || formData.city == "" || formData.state == "" || formData.contact == "") {
            toast.error("All fields are required!", { position: "bottom-right" })
            return;
        }


        const new_user = {
            ...user,
            email: formData.email,
            contact: formData.contact,
            address: formData.address,
            pincode: formData.pincode,
            city: formData.city,
            state: formData.state
        }
        setPopup(false);
        dispatch(editProfile(new_user))
    }

    const [popup, setPopup] = useState(false)
    const cart = user.cart;

    if (!user._id)
        return <Redirect to='/'></Redirect>

    let cart_value = 0;
    const cart_content = cart.map((p) => {
        cart_value += p.quantity * p.price
        return (
            <div>
                <h3>{p.name}</h3>
                <h3>{p.quantity}  X  {p.price}$  =  {p.quantity * p.price}$</h3>
            </div>
        )
    })


    let popup_content = "";
    if (popup)
        popup_content = popup_content = (
            <div className="outer-popup">
                <div className="popup">
                    <FontAwesomeIcon
                        onClick={() => setPopup(false)}
                        className="cross-icon" icon={faTimes} ></FontAwesomeIcon>
                    <h2>Edit Profile</h2>

                    <input
                        placeholder="Email"
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                        value={formData.email}></input>

                    <input
                        placeholder="Contact"
                        onChange={(e) => { setFormData({ ...formData, contact: e.target.value }) }}
                        value={formData.contact}></input>

                    <input
                        placeholder="Address"
                        onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }}
                        value={formData.address}></input>

                    <input
                        placeholder="City"
                        onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }}
                        value={formData.city}></input>
                    <input
                        placeholder="State"
                        onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }}
                        value={formData.state}></input>

                    <input
                        placeholder="Pincode"
                        onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }) }}
                        value={formData.pincode}></input>

                    <button
                        onClick={submitHandler}
                        className="edit-profile-submit-button">SUBMIT</button>
                </div>
            </div>
        )


    return (
        <div className="billing-container">
            {redirect}
            {popup_content}
            <div className="billing-left-section">
                <h2>Your Details</h2>
                <div>
                    <h3>UserName : </h3>
                    <h3>{user.username}</h3>
                </div>
                <div>
                    <h3>Email : </h3>
                    <h3>{user.email}</h3>
                </div>
                <div>
                    <h3>Address : </h3>
                    <h3>{user.address}</h3>
                </div>
                <div>
                    <h3>City : </h3>
                    <h3>{user.city}</h3>
                </div>
                <div>
                    <h3>State :  </h3>
                    <h3>{user.state}</h3>
                </div>
                <div>
                    <h3>Pincode : </h3>
                    <h3>{user.pincode}</h3>
                </div>
                <div>
                    <h3>Contact : </h3>
                    <h3>{user.contact}</h3>
                </div>

                <button onClick={() => setPopup(true)}>

                    <FontAwesomeIcon
                        className="edit-icon"
                        icon={faPencilAlt}></FontAwesomeIcon>
                 Edit Details
                </button>

            </div>

            <div className="billing-right-section">
                <h2>Cart Details</h2>

                {cart_content}

                <div className="billing-right-bottom">
                    <h3>Total : {cart_value}$</h3>
                    <h3></h3>
                </div>

                {/* <NavLink to='/checkout'> */}
                <button
                    onClick={placeOrder}
                    className="add-to-cart">Place Order</button>
                {/* </NavLink> */}
            </div>


        </div>
    )
}

export default BillingDetails
