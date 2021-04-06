import React, { useState } from 'react'
import './styles/Profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faUser, faTimes, faPhone, faLock, faEnvelope, faHome, } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'
import { editProfile } from '../actions'
import { toast } from 'react-toastify'

function Profile() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const [popup, setPopup] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        contact: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    })

    const submitHandler = () => {

        if (formData.email == "" || formData.address == "" || formData.pincode == "" || formData.city == "" || formData.state == "" || formData.contact == "") {
            toast.error("All fields are required!", { position: "bottom-right" })
            return;
        }

        const new_user = { ...user, email: formData.email, contact: formData.contact, address: formData.address, pincode: formData.pincode, city: formData.city, state: formData.state }
        dispatch(editProfile(new_user));
        setPopup(false);
    }


    let popup_content = <></>;
    if (popup) {
        popup_content = (
            <div className="outer-popup">
                <div className="popup">
                    <FontAwesomeIcon
                        onClick={() => setPopup(false)}
                        className="cross-icon" icon={faTimes} ></FontAwesomeIcon>
                    <h2>Edit Profile</h2>

                    <input
                        placeholder="Email*"
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                        value={formData.email}></input>

                    <input
                        placeholder="Contact*"
                        onChange={(e) => { setFormData({ ...formData, contact: e.target.value }) }}
                        value={formData.contact}></input>

                    <input
                        placeholder="Address*"
                        onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }}
                        value={formData.address}></input>

                    <input
                        placeholder="City*"
                        onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }}
                        value={formData.city}></input>
                    <input
                        placeholder="State*"
                        onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }}
                        value={formData.state}></input>

                    <input
                        placeholder="Pincode*"
                        onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }) }}
                        value={formData.pincode}></input>

                    <button
                        onClick={submitHandler}
                        className="edit-profile-submit-button">SUBMIT</button>
                </div>
            </div>
        )
    }



    if (!user._id)
        return <Redirect to='/'></Redirect>

    return (
        <div className="outer-profile">
            {popup_content}
            <div className="left-profile">
                <FontAwesomeIcon className="user-icon-profile" icon={faUser}></FontAwesomeIcon>
            </div>
            <div className="right-profile">
                <h4 onClick={() => setPopup(true)} >
                    <FontAwesomeIcon className="pencil-icon" icon={faPencilAlt}></FontAwesomeIcon>
               		Edit Details
                </h4>
                <div>
                    <h3>UserName : </h3>
                    <h3>{user.username}</h3>
                </div>
                <div>
                    <h3>Email : </h3>
                    <h3>{user.email}</h3>
                </div>
                <div>
                    <h3>Contact : </h3>
                    <h3>{user.contact}</h3>
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
                    <h3>State : </h3>
                    <h3>{user.state}</h3>
                </div>
                <div>
                    <h3>Pincode : </h3>
                    <h3>{user.pincode}</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
