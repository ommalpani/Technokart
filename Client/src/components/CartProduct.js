import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { incrementProduct, decrementProduct, deleteProduct } from '../actions/index'

function CartProduct({ product }) {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const incrementCart = () => {
        dispatch(incrementProduct(user, product));
    }

    const decrementCart = () => {
        if (product.quantity == 1)
            dispatch(deleteProduct(user, product));
        else
            dispatch(decrementProduct(user, product));
    }

    const deleteCart = () => {
        dispatch(deleteProduct(user, product));
    }


    return (
        <div className="cart-product-outer">
            <img src={product.image}></img>
            <div className="cart-product-info">
                <h1 className="cart-product-name">{product.name}</h1>
                <h3 className="cart-product-price">{product.price}$</h3>
                <h3 className="cart-product-desc">{product.desc}</h3>
                <h3 className="cart-product-category">{product.category}</h3>

                <div className="cart-icons">
                    <FontAwesomeIcon
                        onClick={decrementCart}
                        className="icon-plus"
                        icon={faMinus}></FontAwesomeIcon>

                    <h3 className="cart-item-quantity">{product.quantity}</h3>
                    <FontAwesomeIcon
                        onClick={incrementCart}
                        className="icon-minus"
                        icon={faPlus}></FontAwesomeIcon>

                    <FontAwesomeIcon
                        onClick={deleteCart}
                        className="icon-delete"
                        icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
