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
    const handleInput= (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserInfo({
            ...userInfo,
            [name]: value, 
        });
    };

    const handleUploadProfileImage = async (e) => {
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
  <div className="form-container1">
    <form className="form" onSubmit={updateUser}>
      <div className="form-header1">
        <img src={userInfo.image || user.image} alt="Profile Picture" className="profile-image1" onChange={handleInput} />
        <label htmlFor="file" style={{marginTop:"-15px" , textDecoration:"underline" , cursor:"pointer"}}className='label2'>Upload an image</label>
        <input type="file" name="file" id="file" accept='image/*' className='inp1' onChange={handleUploadProfileImage}   />
        <h2 style={{marginTop:"20px"}} className='h2'>Your Profile</h2>
        <p className='p2'>Welcome, <b>{user.name}</b> |  <span>Excited to have you onboard </span></p>
      </div>
      
      <div className="form-body1">
        <div className="input-group">
          <label htmlFor="name" className='label2'>Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter name" required value={userInfo.name} onChange={handleInput} className='input2'/>
        </div>
        
        <div className="input-group">
          <label htmlFor="email" className='label2'>Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" required value={userInfo.email} onChange={handleInput} className='input2'/>
        </div>
        
        <div className="input-group">
          <label htmlFor="phone" className='label2'>Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required value={userInfo.phone} onChange={handleInput} className='input2'/>
        </div>
        
        <div className="input-group">
          <label htmlFor="age" className='label2'>Age</label>
          <input type="number" id="age" name="age" placeholder="Enter age " required value={userInfo.age} onChange={handleInput} className='input2'/>
        </div>
        
        <div>
          <h5 style={{textAlign:"left",textDecoration:"underline"}}>Change Password</h5>
          <br />
        <div className="input-group">
          <label htmlFor="password" className='label2'>New Password</label>
          <input type="password" id="password" name="password" placeholder="Enter new Password"  value={userInfo.password} onChange={handleInput} className='input2'/>
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="confirmPassword" className='label2'>Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Confirm Password "  value={userInfo.confirmPassword} onChange={handleInput} className='input2'/>
        </div>

        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </form>
  </div>
    </div>
    </>
  )
}

export default UserProfile