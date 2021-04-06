import React from 'react'
import './styles/WishList.css'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { modifyWishlist } from '../actions'


function WishList() {

    const dispatch = useDispatch()
    const user = useSelector(store => store.user);

    if (!user._id)
        return <Redirect to='/login'></Redirect>

    const removeFromWishlist = (product) => {
        dispatch(modifyWishlist(user, product))
    }

    const wishlist = user.wishlist;

    let content = <></>
    let empty = <></>

    if (user.wishlist.length > 0) {
        content = user.wishlist.map((p) => (
            <div>
                <FontAwesomeIcon
                    onClick={() => removeFromWishlist(p)}
                    className="delete-icon-wishlist"
                    icon={faTrash}></FontAwesomeIcon>
                <img src={p.image}></img>
                <div>
                    <h1>{p.name}</h1>
                    <h4>{p.desc}</h4>
                    <h4>{p.specs.manufacturer} || {p.specs.model}</h4>
                    <h1>{p.price}$</h1>
                </div>
            </div>
        ))

        content.unshift(<h1>Your Wishlist</h1>)
    }
    else {
        empty = (
            <div className="cart-message">
                <h2>Wishlist is Empty!</h2>
                <NavLink to='/products'>Shop Now</NavLink>
            </div>
        )
    }

    if (!user._id)
        return <Redirect to='/login'></Redirect>


    return (
        <div>
            {empty}
            <div className="outer-wishlist">
                {content}
            </div>
        </div>
    )
}

export default WishList
