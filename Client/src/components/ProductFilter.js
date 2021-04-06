import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'


function ProductFilter({setSort ,  setFilter }) {

    const [flag, setFlag] = useState({
        flag_all: true
    });

    const setLowToHigh = () => {
        setFlag((state) => {
            if (state.lowToHigh == true)
                return { ...state, lowToHigh: false, highToLow : false }
            else
               return { ...state, lowToHigh: true , highToLow : false}
        })
    }

    const setHighToLow = () => {
        setFlag((state) => {
            if (state.highToLow == true)
                return { ...state, highToLow: false , lowToHigh : false}
            else
                return { ...state, highToLow: true, lowToHigh : false }
        })
    }



    return (
        <div className="products-filter">
            <h3>Filters <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></h3>
            <ul>
                <div
                    onClick={() => { setFilter(""); setFlag({ flag_all: true }) }}
                    className={`${flag.flag_all ? "highlight" : ""}  products-filter-item`}>

                    <li>All</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div
                    onClick={() => { setFilter("laptop"); setFlag({ flag_laptop: true }) }}
                    className={`${flag.flag_laptop ? "highlight" : ""}  products-filter-item`}>
                    <li>Laptop</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div
                    onClick={() => { setFilter("laptop"); setFlag({ flag_pc: true }) }}
                    className={`${flag.flag_pc ? "highlight" : ""} products-filter-item`}>
                    <li>PC</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div
                    onClick={() => { setFilter("mobile"); setFlag({ flag_mobile: true }) }}
                    className={`${flag.flag_mobile ? "highlight" : ""} products-filter-item`}>
                    <li>Smart Phones</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div
                    onClick={() => { setFilter("headphone"); setFlag({ flag_headphone: true }) }}
                    className={`${flag.flag_headphone ? "highlight" : ""} products-filter-item`}>
                    <li>Headphones</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div
                    onClick={() => { setFilter("earphone"); setFlag({ flag_earphone: true }) }}
                    className={`${flag.flag_earphone ? "highlight" : ""} products-filter-item`}>
                    <li>Earphones</li>
                    <FontAwesomeIcon className="right-arrow" icon={faChevronRight}></FontAwesomeIcon>
                </div>
            </ul>
            <div className="sort-container">
                {/* <h3 >Sort <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></h3> */}

                <button
                    className={`${flag.highToLow ? "highlight-button" : ""} high-to-low-button`}
                    onClick={() => {  setSort("hightolow");setHighToLow() }} >High To Low</button>

                <button
                    className={`${flag.lowToHigh ? "highlight-button" : ""} high-to-low-button`}
                    onClick={() => {  setSort("lowtohigh");setLowToHigh() }} >Low To High</button>
            </div>
        </div>
    )
}

export default ProductFilter
