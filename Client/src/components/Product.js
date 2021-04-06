import React , {useState} from 'react'
import './styles/Product.css'
import { Redirect  } from 'react-router-dom'

function Product({product}) {

    const [redirect , setRedirect] = useState('');
    const productDetail = ()=>{
        setRedirect(
            <Redirect to={{ pathname : '/productdetail' , data : product}}></Redirect>
        )
    }

    return (
        <div onClick={productDetail} className = "outer-product">
            {redirect}
            <img src = {product.image}></img>
            <h2> {product.name}</h2>
            <h4>{product.specs.manufacturer} || {product.specs.model}</h4>
            <h3>{product.price}$</h3>
        </div>
    )
}

export default Product