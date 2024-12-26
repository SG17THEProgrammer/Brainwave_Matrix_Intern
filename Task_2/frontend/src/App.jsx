import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginRegister from "./components/LoginRegister";
import BlogForm from './components/BlogForm';
import YourPosts from './components/YourPosts';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginRegister></LoginRegister>}></Route>
        <Route path='/createPost' element={<BlogForm></BlogForm>}></Route>
        <Route path='/yourPosts' element={<YourPosts></YourPosts>}></Route>
      </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App