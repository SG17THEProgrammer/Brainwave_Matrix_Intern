import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/AllPosts.css'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { NavLink } from 'react-router-dom';
const AllPosts = () => {

    const [allBlogs , setAllBlogs] = useState()
   
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

    useEffect(() =>{
        getAllBlogs();
    },[])

    console.log(allBlogs)

    return (
        <>
            <Navbar></Navbar>
            <div className='imgDiv'>

                <Box sx={{ width: "90vw", height: "auto", overflowY: 'scroll', marginTop: "20px" }} className="box">
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {allBlogs?.map((item , idx) => (
                            <NavLink to={`/completePost/${item._id}`}><ImageListItem key={idx} className="image-item">
                                <div className="image-container">
                                    <img
                                         src={item.image.startsWith('data:image') ? item.image : `${item.image}?w=248&fit=crop&auto=format`} 
                                         srcSet={item.image.startsWith('data:image') ? '' : `${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`} 
                                        alt={item.title}
                                        loading="lazy"
                                        className='img5 img7'
                                    />
                                    <div className="overlay">
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <div className='hoverDiv'>

                                            <img src={item.authorImage} alt="author_image" className='img4' />
                                            <p>Written by {item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ImageListItem>
                            </NavLink>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </>
    )
}

export default AllPosts