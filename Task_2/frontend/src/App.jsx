import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginRegister from "./components/LoginRegister";
import BlogForm from './components/BlogForm';
import YourPosts from './components/YourPosts';
import FullPost from './components/FullPost';
import UserProfile from './components/UserProfile';
import AllPosts from './components/AllPosts';
import Contact from './components/Contact';

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
        <Route path='/completePost/:id' element={<FullPost></FullPost>}></Route>
        <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/allPosts' element={<AllPosts></AllPosts>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App