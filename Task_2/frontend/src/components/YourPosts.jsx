import React from 'react'
import Navbar from './Navbar'
import '../css/YourPosts.css'
const YourPosts = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="container1">
      <div className="square">
        <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" className=" img6"/>
     <div className="h2">Is Apple a Design Company ?</div>
        <p className='p'>Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world's most revolutionized products.
        </p>
        
     <button className='btn3'>Read More</button>
      </div>
    
      </div>    
    </>
  )
}

export default YourPosts