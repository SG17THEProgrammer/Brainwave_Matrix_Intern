import React from 'react'
import '../css/BlogForm.css'
const BlogForm = () => {
  return (
    <div className='postdiv'>
        <h1>Create Post</h1>

        <label htmlFor="">Title</label>
        <input type="text" placeholder='Enter Title'/>
    </div>
  )
}

export default BlogForm