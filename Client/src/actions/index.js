import * as api from '../api'
import { useSelector } from 'react-redux'

// call api and get data (async)
// set new store
export const getProducts = () => async (dispatch) => {
    try {
        const data = await api.getProducts();
        dispatch({ type: "GET_PRODUCTS", payload: data.data })
    }
    catch (err) {
        console.log("in get prodcuts" , err);
    }
}

export const addToCart = (product, user) => async (dispatch) => {
    try {
        let flag = false;
        for (let i = 0; i < user.cart.length; i++) {
            if (user.cart[i]._id == product._id) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            // user.cart.push({...product , quantity : 1 , price : product.price})
            user.cart.push({ ...product, quantity: 1 })
            const data = await api.updateData(user);
        }
    }
    catch (err) {
        console.log("in add to cart ", err);
    }
}

export const incrementProduct = (user, product) => async (dispatch) => {
    const cart = user.cart;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id == product._id) {
            cart[i].quantity += 1;
            break;
        }
    }


    try {
        dispatch({ type: 'LOGIN', payload: user })
        const { data } = await api.updateData(user);
    }
    catch (err) {
        console.log("error in increment", err);
    }
}

export const decrementProduct = (user, product) => async (dispatch) => {
    const cart = user.cart;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id == product._id) {
            cart[i].quantity -= 1;
            break;
        }
    }

    try {
        await api.updateData(user);
        dispatch({ type: "LOGIN", payload: user })
    }
    catch (err) {
        console.log("error in decrement ", err);
    }
}



export const deleteProduct = (user, product) => async (dispatch) => {
    const cart = user.cart;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id == product._id) {
            cart.splice(i, 1);
            break;
        }
    }

    try {
        await api.updateData(user);
        dispatch({ type: "LOGIN", payload: user })
    }
    catch (err) {
        console.log("error in delete ", err);
    }
}


export const editProfile = (user) => async (dispatch) => {

    try {
        await api.updateData(user);
        dispatch({ type: "LOGIN", payload: user })
    }
    catch (err) {
        console.log("error in editProfile ", err);
    }

}


export const modifyWishlist = (user, product) => async (dispatch) => {



    let flag = true;
    for (let i = 0; i < user.wishlist.length; i++) {
        if (user.wishlist[i]._id == product._id) {
            user.wishlist.splice(i, 1);
            flag = false;
            break;
        }
    }

    if (flag) {
        user.wishlist.push(product);
    }

    try {
        await api.updateData(user)
        dispatch({ type: "LOGIN", payload: user })
    }
    catch (err) {
        console.log("err in wishlist", err)
    }
}




