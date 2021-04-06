import React, {  useState } from 'react'
import './styles/Products.css'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch,  faSearch } from '@fortawesome/free-solid-svg-icons'
import ProductFilter from './ProductFilter'
import { filterFunction } from './productsHelper'


function Products() {
    let allProducts = [];
    allProducts = useSelector(state => state.products);

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    let loader = <></>

    // filter all the products based on the search parameter    
    allProducts = filterFunction(allProducts , search);
    allProducts = filterFunction(allProducts , filter);
    allProducts = filterFunction(allProducts , sort);

    if (allProducts.length == 0){
        loader = <div className="products-spinner-container" >
            <FontAwesomeIcon className="products-spinner" icon={faCircleNotch}></FontAwesomeIcon>
        </div>
    }

    return (
        <div className="outer-products">
            <ProductFilter setSort = {setSort} setFilter={setFilter}></ProductFilter>
            <div className="all-products-outer">
                <div className="search-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Search products , brands and more..."
                        className="search-input"></input>
                </div>
                {loader}
                <div className="all-products">
                    {
                        allProducts.map((product, index) => <Product key={index} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
