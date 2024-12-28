import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Working from './Working'
import Blogs from './Blogs'
import SuccessStories from './SuccessStories'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Working></Working>
      <Blogs></Blogs>
      <SuccessStories></SuccessStories>
      <Footer></Footer>
    </>
  )
}

export default Home