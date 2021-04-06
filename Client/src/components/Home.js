import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './styles/Home.css'


function Home() {

    const user = useSelector(state => state.user)

    return (
        <div className = "outer-home-container">
            <div className="home-container">
                {/* <h1>Technokart</h1> */}
                <h1>Find the best <span className="purple">Electronics</span> gadgets<br />
                    in the entire <span className="purple">world</span> !!!</h1>
                <NavLink to='/products'>Shop Now</NavLink>
            </div>
            <img className = "banner-image" src = "banner.webp"></img>
        </div>
    )
}

export default Home
