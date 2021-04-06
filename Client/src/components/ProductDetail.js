import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './styles/ProductDetail.css'
import { addToCart } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { toast } from 'react-toastify'
import { modifyWishlist } from '../actions'

function ProductDetail(props) {

    const user = useSelector(state => state.user)
    const product = props.location.data;
    const dispatch = useDispatch();
    const [redirect, setRedirect] = useState('');

    if (!product)
        return <Redirect to='/products'></Redirect>


    let favourite = false;
    if (user.wishlist)
        for (let i = 0; i < user.wishlist.length; i++) {
            if (user.wishlist[i]._id === product._id) {
                favourite = true;
                break;
            }
        }

    const addToCartHandler = () => {
        dispatch(addToCart(product, user));
        setRedirect(<Redirect to='/cart'></Redirect>)
    }

    let all_specs = [];
    let temp;
    for (const spec in product.specs) {
        if (spec != "_id")
            temp = <h2 key={spec}>{`${spec} : ${product.specs[spec]}`}</h2>
        all_specs.push(temp);
    }

    const addToWishlist = () => {
        if (!user._id) {
            setRedirect(<Redirect to='/login'></Redirect>)
            return;
        }

        dispatch(modifyWishlist(user, product));

    }

    
    let star_content;
    if (favourite) {
        star_content = (
            <FontAwesomeIcon
                onClick={addToWishlist}
                className="star-icon"
                icon={fullStar}></FontAwesomeIcon>
        )
    }
    else {
        star_content = (
            <FontAwesomeIcon
                onClick={addToWishlist}
                className="star-icon"
                icon={faStar}></FontAwesomeIcon>
        )
    }


    return (
        <div className="outer-product-detail">
            {redirect}
            <div className="left-product-detail">
                <img src={product.image}></img>
            </div>
            <div className="right-product-detail">
                {star_content}
                <div className="product-detail-info">
                    <h1 className="product-name">{product.name}</h1>
                    <h1 className="product-price">{product.price}$</h1>
                    <h2 className="product-desc">{product.desc}</h2>
                    {all_specs.map(el => el)}
                </div>
                <div className="addtocart-container">
                    <button
                        onClick={addToCartHandler}
                        className="add-to-cart">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}


export default ProductDetail
