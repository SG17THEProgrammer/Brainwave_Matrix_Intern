import React, { useState } from 'react'
import '../css/Comment.css'
import { useAuth } from './Auth'
import { toast } from 'react-toastify';
const Comment = ({ blogId, productDisplay }) => {
    const { user } = useAuth();
    const [allComments, setAllComments] = useState(productDisplay?.comments)
    const [comments, setComments] = useState({
        author: '',
        userImage: '',
        text: ''
    })

    const postComment = async (req, res) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/comment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ blogId: blogId, comments: comments })
            })


            const resData = await res.json();

            setComments({
                text: ''
            })

            toast.success(resData.message)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(allComments)


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
            <h5 style={{ marginLeft: "100px" }}>{allComments.length} comments</h5>
            <div>

                {allComments.map((elem,idx) => {
                    return <><div className='commDiv' key={idx}>
                        <div className='leftDiv'><img src={elem.userImage} alt="" /></div>
                        <div className='rightDiv'>
                            <h2>{user.name}</h2>
                            <p>{elem.text}</p>
                            <div className='attrib'>

                                <div>
                                    <span>date</span>
                                    <p>👍Likes Count</p>
                                </div>

                                <div>
                                    <a href="">Like</a>
                                    <a href="">Reply</a>
                                </div>
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