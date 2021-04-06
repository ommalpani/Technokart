import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown, faShoppingCart, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'


function Navbar() {

    const [redirect, setRedirect] = useState('');
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const logoutUser = () => {
        dispatch({ type: "LOGOUT" })
    }

    const user = useSelector(state => state.user);
    const name = user.username;

    let logged_in = true;
    if (!user._id)
        logged_in = false;

    let menu = <></>

    if (showMenu)
        menu = (
            <div className="menu-container">
                <NavLink to='/profile'>
                    <div className="menu-item">
                        <FontAwesomeIcon className="menu-icon" icon={faUser}></FontAwesomeIcon>
                       Profile
                    </div>
                </NavLink>

                <NavLink to='/cart'>
                    <div className="menu-item">
                        <FontAwesomeIcon className="menu-icon" icon={faShoppingCart}></FontAwesomeIcon>
                        Cart
                    </div>
                </NavLink>

                <NavLink to='/wishlist'>
                    <div className="menu-item">
                        <FontAwesomeIcon className="menu-icon" icon={faStar}></FontAwesomeIcon>
                        WishList
                    </div>
                </NavLink>

                <NavLink onClick = {logoutUser} to='/'>
                    <div className="menu-item">
                        <FontAwesomeIcon className="menu-icon" icon={faSignOutAlt}></FontAwesomeIcon>
                        Logout
                    </div>
                </NavLink>

            </div>
        )


    let nav;
    if (logged_in) {
        nav = (
            <div className="navbar-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink onClick={logoutUser} to='/'>Logout</NavLink>

                <div onClick={() => { setShowMenu(!showMenu) }} className="user-profile">
                    <FontAwesomeIcon className="profile-user-icon" icon={faUser}></FontAwesomeIcon>
                    <h3 className="user-icon">{name}</h3>
                    <FontAwesomeIcon className="profile-down-arrow" icon={faChevronDown}></FontAwesomeIcon>
                    {menu}
                </div>

            </div>
        )
    }
    else {
        nav = (
            <div className="navbar-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink className = "login-link" to='/login'>Sign Up</NavLink>
            </div>
        )
    }


    return (
        <div >
            {/* {lower_nav} */}
            <div className="navbar-outer">
                <div className="navbar-left">
                    <NavLink to='/'>
                        <h1 className="technokart-logo">Technokart</h1>
                    </NavLink>

                </div>
                {redirect}
                {nav}
            </div>
        </div>
    )
}

export default Navbar
