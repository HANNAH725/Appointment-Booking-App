import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
    const [reviewText,setReviewText]=useState("")
    const handleSubmitReview = async e=> {
        e.preventDefault()
    }
  return (
    <form action="">
      <div>
        <h3 className="text-headingcolor text-[16px] laeding-6 font-semibold mb-4">
          How would you rate overall experience?
        </h3>
        <div className="">
          {[...Array(5).keys()].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                className={`${
                  starValue <= (rating || hover)
                    ? 'text-[#FFFF00]'
                    : 'text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span> <AiFillStar /> </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingcolor text-[16px] laeding-6 font-semibold mb-4">
          Share your Feedback or Suggestions
        </h3>
        <textarea className="border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md" 
        rows="5"
        placeholder='Write your Message'
        onChange={e =>setReviewText(e.target.value)} id=""></textarea>
      </div>
      <button type="button" onClick={handleSubmitReview} className="btn" >Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
