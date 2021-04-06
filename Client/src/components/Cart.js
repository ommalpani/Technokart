import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './styles/Cart.css'
import { NavLink } from 'react-router-dom'

import CartProduct from './CartProduct'

function Cart() {


    const [redirect, setRedirect] = useState('');
    const user = useSelector(state => state.user)
    const cart = user.cart


    if (!user._id)
        return <Redirect to='/login'></Redirect>




    let cart_content_left
    let cart_sum = 0;
    cart_content_left = cart.map(pr => {
        return <CartProduct key={pr._id} product={pr}></CartProduct>
    })

    const placeOrder = () => {
        setRedirect(<Redirect to='/shipping'></Redirect>)
    }

    let cart_content_right;
    cart_content_right = cart.map((product, index) => {
        cart_sum += product.quantity * product.price
        return (
            <div>
                <div key={`${product._id}${index}`}>
                    {redirect}
                    <div className="cart-right">
                        <div>
                            <h3 className="cart-product-name2">{product.name}</h3>
                            <h3 className="cart-product-price">{product.quantity} X {product.price}$</h3>
                        </div>
                        <div>
                            <h3 className="cart-product-price">{product.quantity * product.price}$</h3>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    let cart_bottom = <></>
    let cart_empty = <></>
    if (cart.length > 0) {
        cart_bottom = (
            <>
                <div className="right-cart-bottom">
                    <h3 className="cart-product-name2">Total</h3>
                    <h3 className="cart-product-name2">{cart_sum}$</h3>
                </div>
                <button onClick={placeOrder} className="checkout-button">Check Out</button>
            </>
        )
    }
    else {
        cart_empty = (
            <div className = "cart-message">
                <h2>Cart is Empty!</h2>
                <NavLink to='/products'>Shop Now</NavLink>
            </div>
        )
    }





    return (
        <div>
            {cart_empty}
            <div className="cart-container">
                <div className="cart-left-outer">
                    {cart_content_left}
                </div>
                <div className="cart-right-outer">
                    {cart_content_right}
                    {cart_bottom}
                </div>
            </div>
        </div>
    )
}

export default Cart