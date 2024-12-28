import React from 'react'
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { formatDistanceToNow } from 'date-fns';
import '../css/BlogCard.css'
const Card = ({blog}) => {

  const {description , media , name , rating , title , userImage , tags , comments , postedOn} = blog

  const blogDate = new Date(postedOn);
  const daysAgo = formatDistanceToNow(blogDate, { addSuffix: true });

  return (
    <>
        <div className="blog-container">
  <div className="blog-header">
    <div>
    <img src={media} alt="image" className='blog-cover' />

      <div className="authorDiv">
      <img src={userImage} alt="author"  className='authorImg'/>
        <h5 style={{color:"white" , fontSize:"12px" , backgroundColor:"black" , padding:"2px 7px" , borderTopLeftRadius:"10px"}}>{name}</h5>
      </div>
    </div>
  </div>

  <div className="blog-body">
    <div className="blog-title">
      <h1><a href="#">{title}</a></h1>
    </div>
    <div className="blog-summary">
      <p>{description}</p>
    </div>
<br />
    <div className="blog-tags">
      <ul>
        {tags?.map((elem,idx)=>{
         return  <li><a href="#">{elem}</a></li>
        })}

      </ul>
    </div>
  </div>
  
  <div className="blog-footer">
    <ul>
      <li className="published-date" style={{color:"black"}}>{daysAgo}</li>
      {/* <li className="comments"><a href="#">
      <FaRegCommentDots style={{color:"brown"}}/>
      <span className="numero">{comments?.length}</span></a></li> */}

      {/* <li className="shares"><a href="#">
      <FaRegStar style={{color:"brown"}}/><span className="numero">{rating}</span></a></li> */}
    </ul>
  </div>

</div>
    </>
  )
}

export default Card