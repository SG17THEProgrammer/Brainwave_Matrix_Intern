import React, { useState } from 'react'
import '../css/LoginRegister.css'
const LoginRegister = () => {
    const [showSignUp , setShowSignUp] = useState(true)
  return (
    <>
    <div className='outerDiv'> 
    <div className={showSignUp ? 'center' : 'centerReg'}>
    {showSignUp?<>
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">Not a member? <a onClick={()=>setShowSignUp(!showSignUp)}>Signup</a></div>
      </form>
      </>
:<>
        <div style={{display:"flex" ,justifyContent:"center", alignItems:"center" , marginRight:"28px"}}>
        <h1>Register</h1>
        <img src="https://images.unsplash.com/photo-1533794299596-8e62c88ff975?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="camera"  className='img'/>
        </div>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Mobile</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Age</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">Already have a account? <a  onClick={()=>setShowSignUp(!showSignUp)}>Login</a></div>
      </form></>
      }
    </div>


</div>
    </>
  )
}

export default LoginRegister