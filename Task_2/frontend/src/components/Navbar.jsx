import React from 'react'
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='otrDiv'>
                loremipsum 📓
                <NavLink><a>About Us</a>
                </NavLink>
                <NavLink>

                    <a>Pricing</a>
                </NavLink>
                <NavLink>

                    <a>FAQ</a>
                </NavLink>
                <NavLink>

                    <a>Our writers</a>
                </NavLink>
                <NavLink>

                    <a>Contact Us</a>
                </NavLink>

                <NavLink to="/login">

                    <button className='btn'>Login / Register</button>
                </NavLink>
            </div>
        </>
    )
}

export default Navbar