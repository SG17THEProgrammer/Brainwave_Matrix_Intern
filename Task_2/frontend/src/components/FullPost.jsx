import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/FullPost.css'
import Navbar from './Navbar';
import { formatDistanceToNow } from 'date-fns';
import { marked } from 'marked';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import StarRating from './StarRating';
import Comment from './Comment';
import { format } from 'date-fns';


const FullPost = () => {
    const { id } = useParams();
    const [allBlogs , setAllBlogs ] = useState();

    const getAllBlogs =async(req,res)=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/getAllBlogs`,{
                method: 'GET'
            })
            
            const resData = await res.json() ; 

            setAllBlogs(resData.allBlogs)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllBlogs()
    },[])

    const productDisplay = allBlogs?.filter((elem) => elem._id === id)[0];  

    const postedOn = productDisplay?.postedOn;
    const postedDate = new Date(postedOn);

  
    if (isNaN(postedDate)) {
      return <p></p>;
    }
  
    const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });

    const dateNday = postedDate.toString().slice(0, 3) + ', ' + postedDate.toString().substring(4,16);


const markdownContent = productDisplay?.description;



const tagLength = productDisplay?.tags?.length

    return (
    <>
    <Navbar></Navbar>
<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>{productDisplay?.title}</h2>
      <div className='tagdiv'>
      {productDisplay?.tags?.map((elem , idx )=>{
        return <span key={idx}>{elem}&nbsp;{idx < tagLength- 1 ?"|":""}&nbsp;</span> 
      })}
      </div>
      <br />
      <h5>{productDisplay?.story}</h5>
      <p>{timeAgo} ({dateNday}) ,  {format(new Date(productDisplay?.postedOn), 'h:mm a')}</p>
      <div>
        <img src={productDisplay?.image} alt="blog_image" className="fakeimg" />
      </div> 
      <div dangerouslySetInnerHTML={{__html: marked(markdownContent) }}  style={{marginTop:"20px"}}/>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card1 card">
      <h2>{productDisplay?.name}</h2>
      <div >
      <img src={productDisplay?.authorImage} alt="" className="fakeimg" />
      </div>
      <span>{productDisplay?.email}</span>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <div className='icondiv'>
       <FaLinkedin title='Linkedin'></FaLinkedin>
        <FaFacebook title='Facebook'></FaFacebook>
        <FaInstagramSquare title='Instagram'></FaInstagramSquare>
      </div>
    </div>
    <div className="card">
      <h3>Rate this Post</h3>
        <StarRating blogId={id} productDisplay={productDisplay} getAllBlogs={getAllBlogs}></StarRating>
    </div>
    <div className="card1 card ">
      <h3>Popular Post</h3>
      <div className="fakeimg">Image</div><br/>
      <div className="fakeimg">Image</div><br/>
      <div className="fakeimg">Image</div>
    </div>
    
  </div>
</div>
  
  <Comment blogId={id} productDisplay={productDisplay} getAllBlogs={getAllBlogs}></Comment>
    </>
  )
}

export default FullPost