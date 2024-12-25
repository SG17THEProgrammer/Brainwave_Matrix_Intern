import React, { useState } from 'react'
import '../css/LoginRegister.css'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { useAuth } from './Auth'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LoginRegister = () => {
  const { storeTokensInLS } = useAuth();
  const navigate = useNavigate()
  const [showSignUp, setShowSignUp] = useState(true)
  const [showPassword, setshowPassword] = useState(false)
  const [registerUser, setregisterUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    image: "",
  })


  const handleUploadProfileImage = async (e) => {
    // //console.log(e.target.files[0])
    const image = await ImagetoBase64(e.target.files[0])


    setregisterUser((prev) => {
      return {
        ...prev,
        image: image
      }
    })

  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setregisterUser({
      ...registerUser,
      [name]: value,
    });
  }

  // console.log(registerUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUser),
      });
      console.log("response data : ", response);

      const resData = await response.json();
      console.log(resData);

      if (response.ok) {

        //storing tokens in LS through context api 
        storeTokensInLS(resData.token)

        setregisterUser({ name: "", email: "", phone: "", password: "", image: "" });
        navigate('/')
        toast.success(resData.message[0]);
      } else {
        toast.error(resData.message[0]);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
    <Navbar></Navbar>
      <div className='outerDiv'>
        <div className={showSignUp ? 'center' : 'centerReg'}>
          {showSignUp ? <>
            <h1>Login</h1>
            <form method="post">
              <div className="txt_field">
                <input type="text" required />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field lab">
                <input type={showPassword ? "text" : "password"} required />
                <span></span>
                <label >Password</label>
                {showPassword ? <IoEyeSharp onClick={() => setshowPassword(!showPassword)} style={{ cursor: "pointer" }}></IoEyeSharp> : <FaEyeSlash onClick={() => setshowPassword(!showPassword)} style={{ cursor: "pointer" }}></FaEyeSlash>}
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="submit" value="Login" />
              <div className="signup_link">Not a member? <a onClick={() => setShowSignUp(!showSignUp)} style={{ color: "#2691d9" }}>Signup</a></div>
            </form>
          </>
            : <>
              <div className='regdiv'>
                <h2 style={{ marginRight: "17vw" }}>Register</h2>
                <img src={registerUser?.image || "https://images.unsplash.com/photo-1533794299596-8e62c88ff975?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="camera" className='img' />
                <div className='labeldiv'>

                  <label htmlFor='file' className='label1'>Upload</label>
                </div>
                <input type='file' id='file' className='inp1' name='file' accept='image/*' onChange={handleUploadProfileImage} ></input>
              </div>
              <hr />

              <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                  <input type="text" required onChange={handleInput} name='name' value={registerUser.name} />
                  <span></span>
                  <label>Name</label>
                </div>
                <div className="txt_field">
                  <input type="text" required onChange={handleInput} name='email' value={registerUser.email} />
                  <span></span>
                  <label>Email</label>
                </div>
                <div className="txt_field">
                  <input type="number" required onChange={handleInput} name='phone' value={registerUser.phone} />
                  <span></span>
                  <label>Phone</label>
                </div>
                <div className="txt_field">
                  <input type="number" required onChange={handleInput} name='age' value={registerUser.age} />
                  <span></span>
                  <label>Age</label>
                </div>
                <div className="txt_field lab">
                  <input type={showPassword ? "text" : "password"} required onChange={handleInput} name='password' value={registerUser.password} />
                  <span></span>
                  <label >Password</label>
                  {showPassword ? <IoEyeSharp onClick={() => setshowPassword(!showPassword)} style={{ cursor: "pointer" }}></IoEyeSharp> : <FaEyeSlash onClick={() => setshowPassword(!showPassword)} style={{ cursor: "pointer" }}></FaEyeSlash>}

                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Register" />
                <div className="signup_link">Already have a account? <a onClick={() => setShowSignUp(!showSignUp)} style={{ color: "#2691d9" }}>Login</a></div>
              </form></>
          }
        </div>


      </div>
    </>
  )
}

export default LoginRegister