import React, { useEffect, useRef, useState } from 'react'
import '../css/Comment.css'
import { useAuth } from './Auth'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { format } from 'date-fns';
const Comment = ({ blogId, productDisplay }) => {
    const { user } = useAuth();
    const commentRef = useRef(null);

    const [editCommentId, setEditCommentId] = useState();
    const [newCommentText, setNewCommentText] = useState("");

    const [allComments, setAllComments] = useState(productDisplay?.comments)
    const [comments, setComments] = useState({
        author: '',
        userImage: '',
        text: ''
    })

    const postComment = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/comment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ blogId: blogId, comments: comments })
            })


            const resData = await res.json();

            setAllComments(resData.blog.comments)

            setComments({
                text: ''
            })

            toast.success(resData.message)

        } catch (error) {
            console.log(error)
        }
    }


    const deleteComment = async (commentIdx) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/delComment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ commentIdx: commentIdx, blogId: blogId })

            })

            const resData = await res.json();

            // console.log(resData)

            setAllComments(resData.blog.comments)
            toast.success(resData.message)


        } catch (error) {
            console.log(error)
        }
    }

    const editComment = (commentId, currText) => {
        setEditCommentId(commentId)
        setNewCommentText(currText);
    }

    const handleChange = (e) => {
        setNewCommentText(e.target.value);
        console.log(e.target.value)
    };

    const handleEditComment = async (commentId) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/editComment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ commentId: commentId, blogId: blogId, newText: newCommentText })
            })

            const resData = await res.json();
console.log(resData)
            if (res.ok) {

                const updatedComments = allComments.map(comment => {
                    if (comment._id === editCommentId) {
                      return { ...comment, text: newCommentText };
                    }
                    return comment;
                  });
          
                  setAllComments(updatedComments); 
                    setEditCommentId(null);
                
                toast.success(resData.message)
            }
            else {
                toast.error('Error updating comment')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleClickOutside = (e) => {
        if (commentRef.current && !commentRef.current.contains(e.target)) {
          setEditCommentId(null); 
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <>
            <div className='commentDiv'>
                <h4>Comments</h4>
                <textarea className='txtArea' placeholder='Write a comment...' value={comments.text} onChange={(e) => setComments({
                    text: e.target.value, author: user?.name,
                    userImage: user?.image || "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                })}></textarea>
                <br />
                <button className='submitBtn' onClick={postComment}>Submit</button>
            </div>

            {/* comment div  */}
            <h5 style={{ margin: "60px 0 20px 60px", textDecoration: "underline" }}>{allComments.length} comments</h5>
            <div>

                {allComments.map((elem, idx) => {
                    return <><div className='commDiv' key={idx}>
                        <div className='leftDiv'><img src={elem.userImage} alt="user_image" /></div>
                        <div className='rightDiv'>
                            <div className='function'>
                                <h2>{user.name}</h2>
                                <div>

                                    {editCommentId == elem._id ? <button className='btn' style={{ fontSize: "13px" }} onClick={() => handleEditComment(elem._id)}>Edit</button> : ""}


                                    <button className='btn' onClick={() => editComment(elem._id, elem.text)}><CiEdit></CiEdit></button>

                                    <button className='btn' style={{ color: "red" }} onClick={() => deleteComment(idx)}><MdDelete></MdDelete></button>
                                </div>
                            </div>
                            {editCommentId == elem._id ? <textarea   ref={commentRef} name="newCommentText" value={newCommentText} className='txtArea' onChange={handleChange}></textarea> : <p>{elem.text}</p>}


                            <div className='attrib'>

                                <div>
                                    <span>{(new Date(elem.createdAt)).toString().substring(4, 7) + ' ' + (new Date(elem.createdAt)).getDate() + ', ' + (new Date(elem.createdAt)).getFullYear()
                                    }</span>
                                    <span>{format(new Date(elem.createdAt), 'h:mm a')}</span>
                                    {/* <p>👍{likes}</p> */}
                                </div>

                                {/* <div>
                                    <span style={{color:"blue" , cursor:"pointer"}} onClick={()=>setLikes(likes+1)}>Like</span>
                                    <span style={{color:"blue" , cursor:"pointer"}}>Reply</span>
                                </div> */}
                            </div>
                        </div>

                    </div>
                    </>
                }

                )}
            </div>

        </>
    )
}

export default Comment