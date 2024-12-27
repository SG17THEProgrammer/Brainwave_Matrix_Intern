import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const StarRating = ({blogId , productDisplay}) => {

    const [rating, setRating] = useState(0);
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
              body:JSON.stringify({rating:rating , blogId:blogId})
            })


              const resData = await res.json();

                setRating(0)
              toast.success(resData.message)    


        } catch (error) {
            console.log(error)
        }
      }


      const sumRatings = productDisplay?.rating.reduce((sum, currentRating) => sum + currentRating, 0);

      const len =  productDisplay?.rating.length 

      const finalRatings = sumRatings/len ; 


  return (
    <>
     <span>Rating: {finalRatings ? finalRatings.toFixed(2):"0"}⭐</span>
    <div className='starDiv'>
     {renderStars()} 
     <div style={{marginLeft:"10px"}}>{rating} stars </div>
    </div>
    <button className='btn1' onClick={giveRating}>Rate</button>
    </>
  )
}

export default StarRating