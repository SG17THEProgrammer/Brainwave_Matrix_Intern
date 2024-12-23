import React from 'react'
import '../css/BlogForm.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../components/Navbar.jsx'
const BlogForm = () => {

  const modules ={
    toolbar:[
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list':'ordered'},{'list':'bullter'}, {'indent':'-1'}, {'indent': '+1'} ],
        ['clean'],
        ['link', 'image']
    ]
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

  return (
    <>
    <Navbar></Navbar>
    <div className='postdiv'>
        <h1 className='h1'>Create A Post</h1>

        <label htmlFor="" className='label'>Title</label>
        <input type="text" placeholder='Enter Title'/>

        <label htmlFor="" className='label'>Story</label>
        <input type="text" placeholder='Write your Story'/>
        
        <label htmlFor="" className='label'>Description</label>
        <ReactQuill theme="snow" modules={modules} formats={formats} className='reactquill' placeholder='Write your blog'/>
        <br /><br />
        
        <label htmlFor="" className='label'>Tags</label>
        <input type="text" placeholder='Enter Tags'/>


<br /><br />
        <button className='btn2'>Create Post</button>
      

    </div>
    </>
  )
}

export default BlogForm