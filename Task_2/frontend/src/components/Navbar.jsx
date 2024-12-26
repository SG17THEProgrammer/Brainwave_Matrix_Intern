import React from 'react'
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
const Navbar = () => {
    const { isLoggedIn, user } = useAuth();
    return (
        <>
            <div className='otrDiv'>
                <NavLink to='/'>
                    📖 BlogEDastan 📰
                </NavLink>

                <NavLink>

                    <a>Pricing</a>
                </NavLink>

                <NavLink>

                    <a>FAQ</a>
                </NavLink>


                <NavLink>

                    <a>Contact Us</a>
                </NavLink>

                <NavLink><a>All Posts</a>
                </NavLink>

                <NavLink  to='/yourPosts'>

                    <a>Your posts</a>
                </NavLink>

                <NavLink  to='/createPost'>

                    <a>Create a Post</a>
                </NavLink>

                {!isLoggedIn ? <NavLink to="/login">

                    <button className='btn1'>Login  <i className="fa-solid fa-hand fa-shake" style={{ color: "#FCF596" }}></i> Register</button>
                </NavLink> : <img src={user?.image || "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='userimage' className='img4'></img>}
            </div>
        </>
    )
}

export default Navbar