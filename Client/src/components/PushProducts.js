import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { pushProducts } from '../api/index'
import './styles/PushProducts.css'

function PushProducts() {


    const [product, setProduct] = useState({
        name: '',
        desc: '',
        category: '',
        image: '',
        price: '',
        specs: {}
    })

    const submitHandler = () => {
        pushProducts(product);
    }

    let more_inputs = <></>
    if (product.category == "Laptop" || product.category == "PC") {
        more_inputs = (
            <>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, manufacturer: e.target.value } }) }}
                    placeholder="manufacturer"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, model: e.target.value } }) }}
                    placeholder="model"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, hdd: e.target.value } }) }}
                    placeholder="hdd"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, ram: e.target.value } }) }}
                    placeholder="ram"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, graphics: e.target.value } }) }}
                    placeholder="graphics"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, screen_size: e.target.value } }) }}
                    placeholder="screen_size"></input>
            </>
        )
    }
    else if (product.category == "Mobile") {
        more_inputs = (
            <>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, manufacturer: e.target.value } }) }}
                    placeholder="manufacturer"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, model: e.target.value } }) }}
                    placeholder="model"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, hdd: e.target.value } }) }}
                    placeholder="hdd"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, ram: e.target.value } }) }}
                    placeholder="ram"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, screen_size: e.target.value } }) }}
                    placeholder="screen_size"></input>
            </>
        )
    }
    else if (product.category == "Headphone" || product.category == "Earphone") {
        more_inputs = (
            <>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, driver_size: e.target.value } }) }}
                    placeholder="driver_size"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, output: e.target.value } }) }}
                    placeholder="output"></input>
                <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, manufacturer: e.target.value } }) }}
                    placeholder="manufacturer"></input>
                 <input
                    onChange={(e) => { setProduct({ ...product, specs: { ...product.specs, model: e.target.value } }) }}
                    placeholder="model"></input>
            </>
        )
    }

    return (
        <div className="outer-push-products">
            <input
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                placeholder="Product name"></input>

            <input
                value={product.desc}
                onChange={(e) => setProduct({ ...product, desc: e.target.value })}
                placeholder="Description"></input>



            <select value={product.category}>
                <option
                    onClick={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    value="Laptop">Laptop</option>

                <option onClick={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    value="Headphone">Headphone</option>

                <option onClick={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    value="PC">PC</option>

                <option onClick={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    value="Earphone">Earphone</option>

                <option onClick={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    value="Mobile">Mobile</option>

            </select>

            <input
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                placeholder="Price"></input>

            {more_inputs}

            <FileBase
                type="file" multiple={false}
                value={product.image}
                onDone={({ base64 }) => { setProduct({ ...product, image: base64 }) }}>
            </FileBase>
            <img src = {product.image}></img>
            <button onClick={submitHandler}>SUBMIT</button>
        </div>
    )
}

export default PushProducts