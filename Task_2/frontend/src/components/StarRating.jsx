import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from './Auth';
const StarRating = ({blogId , productDisplay}) => {
    const {user} = useAuth()
    const [rating, setRating] = useState(0);
    // const [finalRatings , setFinalRatings] = useState(parseFloat(sumRatings/len))
    const [finalRatings , setFinalRatings] = useState()

    const handleStarClick = (rate) => {
      setRating(rate);  
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span
              key={i}
              onClick={() => handleStarClick(i)}
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                color: i <= rating ? '#ffcc00' : '#ddd',
              }}
            >
              &#9733;
            </span>
          );
        }
        return stars;
      };


      const giveRating=async(req,res)=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/rating`,{
                method:"POST" , 
                headers: {
                          'Content-Type': 'application/json',
                      },
              body:JSON.stringify({rating:rating , blogId:blogId , userId :user?._id})
            })


              const resData = await res.json();
                // setRating(finalRatings)

              const rate =resData?.blog?.rating?.[user._id]
              setRating(rate) 

              toast.success(resData.message)    


        } catch (error) {
            console.log(error)
        }
      }



      const getRating = async(req,res)=>{
        try {

          const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/getRating`,{
        method:"POST" , 
          headers: {
					'Content-Type': 'application/json',
				},
        body:JSON.stringify({blogId:blogId , userId:user._id})
      })

			const resData = await res.json();

      setRating(resData.userRating)
      
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        if (user?._id && blogId) {
          getRating();
        }
      }, [user?._id, blogId]); 



 // const sumRatings = productDisplay?.rating?.reduce((sum, currentRating) => sum + currentRating, 0);

      //   const len =  productDisplay?.rating.length 

      const allRatings = Object.values( productDisplay?.rating);
  const sum = allRatings.reduce((acc, rating) => acc + rating, 0);
  const avgRating = (parseFloat(sum / allRatings.length)).toFixed(2);
    
  return (
    <>
     <span>Rating: {avgRating?avgRating:"0"}⭐</span>
    <div className='starDiv'>
     {renderStars()} 
     <div style={{marginLeft:"10px"}}>{rating ==0 ? "" : `You rated ${rating} stars ` }</div>
    </div>
    <button className='btn1' onClick={giveRating}>Rate</button>
    </>
  )
}

export default StarRating