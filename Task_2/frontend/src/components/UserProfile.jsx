import React, { useState } from 'react'
import { useAuth } from './Auth'
import '../css/UserProfile.css'
import Navbar from './Navbar'
import { toast } from 'react-toastify'
import { ImagetoBase64 } from '../utility/ImagetoBase64'

const UserProfile = () => {
  const {user} = useAuth()

  const [userData, setUserData] = useState(true)
    const [userInfo , setUserInfo] = useState({
        name : "",
        email:"",
        phone:"",
        age:"" , 
        image:"" ,
        password:"",
        confirmPassword:""
    })

    if (userData && user) {
      setUserInfo({
            name: user.name,
            email: user.email,
            phone: user.phone,
            age: user.age,
        });
        setUserData(false);
    }

    console.log(userInfo)
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserInfo({
            ...userInfo,
            [name]: value, 
        });
    };

    const handleUploadProfileImage = async (e) => {
      // //console.log(e.target.files[0])
      const image = await ImagetoBase64(e.target.files[0])
  
  
      setUserInfo((prev) => {
        return {
          ...prev,
          image: image
        }
      })
  
    }


    const updateUser = async (e) => {
      e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/updateProfile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userInfo  , userId:user._id})
            });
            //console.log(response)
            const data = await response.json();
            console.log(data)

            if (response.ok) {
                toast.success(data.message[0])
            }
            else {
                toast.error(data.message[0])
            }
        }

        catch (error) {
            toast.error("Something went wrong")
        }
    }

  return (
    <>
    <Navbar></Navbar>
    <div className='uprDiv'>
  <div class="form-container">
    <form class="form" onSubmit={updateUser}>
      <div class="form-header">
        <img src={userInfo.image || user.image} alt="Profile Picture" class="profile-image" onChange={handleInput}/>
        <label htmlFor="file" style={{marginTop:"-15px"}}>Upload an image</label>
        <input type="file" name="file" id="file" accept='image/*' className='inp1' onChange={handleUploadProfileImage}   />
        <h2 style={{marginTop:"20px"}} >Your Profile</h2>
        <p>Welcome, <b>{user.name}</b> |  <span>Excited to have you onboard </span></p>
      </div>
      
      <div class="form-body">
        <div class="input-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter name" required value={userInfo.name} onChange={handleInput}/>
        </div>
        
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" required value={userInfo.email} onChange={handleInput}/>
        </div>
        
        <div class="input-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required value={userInfo.phone} onChange={handleInput}/>
        </div>
        
        <div class="input-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter age " required value={userInfo.age} onChange={handleInput}/>
        </div>
        
        <div>
          <h5 style={{textAlign:"left",textDecoration:"underline"}}>Change Password</h5>
          <br />
        <div class="input-group">
          <label for="password">New Password</label>
          <input type="password" id="password" name="password" placeholder="Enter new Password"  value={userInfo.password} onChange={handleInput}/>
        </div>
        <br />
        <div class="input-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Confirm Password "  value={userInfo.confirmPassword} onChange={handleInput}/>
        </div>

        </div>
        
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
  </div>
    </div>
    </>
  )
}

export default UserProfile