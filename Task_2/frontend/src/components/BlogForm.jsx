import React, { useEffect, useState } from 'react'
import '../css/BlogForm.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../components/Navbar.jsx'
import { RiGeminiFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from './Auth.jsx';
import { ImagetoBase64 } from '../utility/ImagetoBase64.js';
// import Markdown from 'react-markdown'
import { toast } from 'react-toastify';
import Loader from '../components/Loader.jsx'
// import marked from 'marked';
import { Remarkable } from 'remarkable';



const BlogForm = () => {
const {user} = useAuth()

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullter' }, { 'indent': '-1' }, { 'indent': '+1' }],
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

  const [loader ,setLoader] = useState(false)
  const [newTag, setNewTag] = useState(''); 
   const [tags, setTags] = useState([])

  //  console.log(user)
   

  const [formData, setFormData] = useState({
    name: '',
    email:'',
    title: '',
    story: '',
    description: '',
    authorImage: '',
    tags:[],
    image:'',
});

useEffect(()=>{
  if (user) {
		setFormData({
      name: user.name,
      email:user.email,
      title: '',
    story: '',
    description: '',
    authorImage: user.image || "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags:[],
    image:'',
		});
	}
},[user])



// const [userData, setUserData] = useState(true)
// // console.log(userData && user)
// // console.log(userData)
// // console.log(JSON.stringify(user))
	


  const handleKeyPress = (e) => {
    const inputValue = newTag.trim();

    if (e.key === 'Enter' && inputValue !== '') {
      e.preventDefault(); 
      if (!tags.includes(inputValue)) {
        setTags((prevTags) => {
          const updatedTags = [...prevTags, inputValue];
          setFormData({
            ...formData,
            tags: updatedTags, 
          });
          return updatedTags; 
        });
      }
      setNewTag(''); 
    }
  };

  const deleteTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    setFormData({
      ...formData,
      tags: updatedTags,
    });
  };

  const generateStory=async()=>{
    setLoader(true)
    let dataToSend 
    if(formData.title=='' ){
      toast.error("Enter title")
      setLoader(false)
      return;
    }
    else if (formData.tags.length==0){
      toast.error("Enter atleast one tag")
      setLoader(false)
      return;
    }
    else{
      dataToSend = {
        title: formData?.title,
        tags: formData?.tags,
        purpose:'forStory'
      };
    }
      
    // console.log(dataToSend);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/getAnswer`,{
          method:"POST" , 
          headers: {
					"Content-Type": "application/json",
				},
          body:JSON.stringify(dataToSend)
        })

        const answer = await response.json() 

        const md = new Remarkable();
        const htmlContent = md.render(answer);

        // console.log(answer);
        setFormData({
          ...formData,
          story:htmlContent
        })

      } catch (error) {
        console.log(error)
      }
      finally{
        setLoader(false)
      }
  }

  const generateDescription=async()=>{
    setLoader(true)
    if(formData.title=='' ){
      toast.error("Enter title")
      setLoader(false)
      return;
    }
    else if (formData.tags.length==0){
      toast.error("Enter atleast one tag")     
     setLoader(false)
      return;
    }
    else if (formData.story==''){
      toast.error("Enter story first")
      setLoader(false)
      return;
    }

    const dataToSend = {
      title: formData?.title,
      tags: formData?.tags,
      story: formData?.story,
      purpose:'forDescription'

    };
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/getAnswer`,{
          method:"POST" , 
          headers: {
					"Content-Type": "application/json",
				},
          body:JSON.stringify(dataToSend)
        })

        const answer = await response.json() 
        // const htmlContent = marked(answer);

        const md = new Remarkable();
const htmlContent = md.render(answer);

        setFormData({
          ...formData,
          description:htmlContent
        })
        
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoader(false)
      }
  }

  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      description: value, 
    });
  };

  const handleTags = (e) => {
    const inputValue = e.target.value.trim();
    setNewTag(inputValue); 
  };

  const handleUploadProfileImage = async (e) => {
    const image = await ImagetoBase64(e.target.files[0])

    setFormData((prev) => {
      return {
        ...prev,
        image: image
      }
    })

  }

  // console.log(formData)

  const handleSubmit =async(req,res)=>{
    try {
      // console.log(formData)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/createPost`,{
        method:"POST" , 
          headers: {
					'Content-Type': 'application/json',
				},
        body:JSON.stringify(formData)
      })

			const resData = await response.json();

      console.log(resData )
      
      if(response.ok){

        setFormData({
          title: '',
          description: '',
          image:'',
        })

        setFormData({
          description: '',
        })
        
        setFormData({
          story: '',
        })

        setTags([])

        toast.success(resData.message);

      }
      else{
        toast.error(resData.message[0])
      }


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='postdiv'>
        <h1 className='h1'>Create A Post</h1>
{/* <Markdown>**Cricket**</Markdown> */}
        <label htmlFor="file" className='label' style={{marginBottom:"10px" , textDecoration:"underline" , color:"skyblue" , cursor:"pointer" }}>Upload an Image</label>

        <img src={formData?.image || "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="blog_image" className='img5'/>
        <input type='file' id='file' className='inp1' name='file' accept='image/*' onChange={handleUploadProfileImage} />

    <br />

        <label htmlFor="" className='label'>Title</label>
        <input type="text" className='inpTxt' placeholder='Enter Title' onChange={handleInput} name='title' value={formData.title}/>

        <label htmlFor="" className='label'>Tags <span className='instruction'>(Press Enter to add a tag)</span></label>
        <input type="text" className='inpTxt' onChange={handleTags}
        value={newTag} name='tags' onKeyDown={handleKeyPress} placeholder='Enter Tags' />

      <div className='tagdiv'>
        {tags?.map((elem, idx) => {
            return <>
            <div className='tags' key={idx}>{elem} &nbsp; <RxCross2 style={{marginTop:"-1px" , cursor:"pointer"}} onClick={()=>deleteTag(elem)}/></div>
            </>
        })}
            </div>
        <br /><br />

        <div className='aidiv'>
          <label htmlFor="" className='label'>Story</label>
          <button className='aibtn' onClick={generateStory}><RiGeminiFill /> Generate using AI</button>
        </div>
        <input type="text" className='inpTxt' placeholder='Write/Generate your Story' onChange={handleInput} name='story' value={formData.story}/>

        <br />
        <div className='aidiv'>
          <label htmlFor="" className='label'>Description</label>
          <button className='aibtn' onClick={generateDescription}><RiGeminiFill /> Generate using AI</button>
        </div>
        <ReactQuill theme="snow" modules={modules} formats={formats} className='reactquill' placeholder='Write/Generate your blog' name='description' onChange={handleQuillChange} value={formData?.description}/>
        <br></br>

        <button className='btn2' onClick={handleSubmit}>Create Post</button>


      </div>
      {loader?<Loader></Loader>:""}
    </>
  )
}

export default BlogForm