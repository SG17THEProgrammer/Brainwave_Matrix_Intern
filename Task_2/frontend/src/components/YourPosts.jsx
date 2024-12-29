import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/YourPosts.css'
import { useAuth } from './Auth'
import { NavLink } from 'react-router-dom'
const YourPosts = () => {
  const { user } = useAuth()
  
  const [yourPost, setYourPost] = useState()

  const getYourBlogs = async (req, res) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/getYourPost`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user?.email })
      })

      const resData = await response.json();
      // console.log(resData)

      setYourPost(resData.yourBlog)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getYourBlogs()
  }, [])

  // console.log(yourPost)
  return (
    <>
      <Navbar></Navbar>
      <div className="container1">
        {yourPost?.length>0 ? yourPost?.map((elem , idx) => {
          return <> <div className="square" key={idx}>
            <img src={elem.image} className=" img6" />
            <div className="h2">{elem.title}</div>
            <p className='p'>{elem.story}
            </p>

            <NavLink to={`/completePost/${elem._id}`} style={{textDecoration:"none"}}>
            <button className='btn3'>Read More</button>
            </NavLink>
          </div>
          </>
        }) : <div style={{display:"flex" , justifyContent:"center" , width:"95vw"}}>
        <h4>No posts yet !! 😒 </h4>
        </div>
        }

      </div>
    </>
  )
}

export default YourPosts