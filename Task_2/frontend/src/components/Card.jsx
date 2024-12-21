import React from 'react'
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import '../css/BlogCard.css'

const Card = () => {
  return (
    <>
    <div className='carousel-item active'>

        <div className="blog-container">
  <div className="blog-header">
    <div>
    <img src="https://plus.unsplash.com/premium_photo-1684772692884-9094d7ba083f?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='blog-cover' />

      <div className="authorDiv">
      <img src="https://plus.unsplash.com/premium_photo-1684772692884-9094d7ba083f?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="author"  className='authorImg'/>
        <h3 style={{color:"white"}}>Russ Beye</h3>
      </div>
    </div>
  </div>

  <div className="blog-body">
    <div className="blog-title">
      <h1><a href="#">I Like To Make Cool Things</a></h1>
    </div>
    <div className="blog-summary">
      <p>I love working on fresh designs that <a href="https://www.youtube.com/watch?v=hANtM1vJvOo">breathe</a>. To that end, I need to freshen up my portfolio here because it does exactly the opposite. For the next month I will be working almost exclusively on my portfolio. Sounds like a lot of fun!</p>
    </div>
<br />
    <div className="blog-tags">
      <ul>
        <li><a href="#">css</a></li>
        <li><a href="#">web design</a></li>
        <li><a href="#">codepen</a></li>
        <li><a href="https://twitter.com/russbeye">twitter</a></li>
      </ul>
    </div>
  </div>
  
  <div className="blog-footer">
    <ul>
      <li className="published-date">2 days ago</li>
      <li className="comments"><a href="#">
      <FaRegCommentDots />
      <span className="numero">4</span></a></li>

      <li className="shares"><a href="#">
      <FaRegStar /><span className="numero">1</span></a></li>
    </ul>
  </div>

</div>

    </div>
    </>
  )
}

export default Card