import React from 'react'
import '../css/Working.css'
const Working = () => {
  return (
    <>
        <div className='topdiv'>
            <p>SNEAK A PEEK</p>
            <h1 style={{borderBottom:"3px solid black" }}>HOW IT WORKS</h1>
<br />
            <p>The blogging struggle is real. Time is short. Writing is hard. And today's blog post keeps getting pushed into tomorrow. And then the next day.. We flip the script and get tommorow's blog post done today .    </p>
            <div className='steps'>
                <div className='particularStep'>
                    <img src="https://plus.unsplash.com/premium_vector-1721296173984-50e620b0af3e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="create" className='img2'/>
                    <h2>CREATE ARTICLE</h2>
                    <p className='para'>Tell us about your blog or the blog you envision.</p>
                </div>
                <div className='particularStep'>
                    <img src="https://plus.unsplash.com/premium_vector-1721296174938-d52482bef6dd?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="write" className='img2'/>
                    <h2>WE WRITE</h2>
                    <p className='para'>Our AI-based technology, will write a post based on your vison </p>
                </div>
                <div className='particularStep'>
                    <img src="https://plus.unsplash.com/premium_vector-1721296175362-c52a73ff127b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post" className='img2'/>
                    <h2>YOU POST</h2>
                    <p className='para'>GO nuts ,Share it across social media , Build your Presence  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Working