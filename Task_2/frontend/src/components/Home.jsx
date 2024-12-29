import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Working from './Working'
import Blogs from './Blogs'
import SuccessStories from './SuccessStories'
import '../css/Working.css'

const Home = () => {

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      
   <Working action={'howItWorks'}></Working>

      <Blogs></Blogs>

      <div style={{marginTop:"180px"}}>

      <Working action={'whyChooseUs'}></Working>
      </div>

      <SuccessStories></SuccessStories>
    </>
  )
}

export default Home