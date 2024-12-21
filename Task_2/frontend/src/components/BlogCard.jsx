import React from 'react'
import Card from './Card';
const BlogCard = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:"black"}}></button>  
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor:"black"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{backgroundColor:"black"}}></button>
  </div>

  <div className="carousel-inner">
    <Card></Card>
</div>

<button className="carousel-control-prev bg-dark text-white" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{width:"30px" , height:"50vh" , marginTop:"35vh"}}>
    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span className="visually-hidden" >Previous</span>
  </button>

  <button className="carousel-control-next bg-dark text-white" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{width:"30px" , height:"50vh" , marginTop:"35vh"}}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
    </>
  )
}

export default BlogCard