import { useState } from 'react'
import avatarIcon from '../../assets/images/avatarIcon.png' 
import { formateDate } from '../../utils/formateDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const feedback = () => {
    const [showFeedbackForm,setShowFeedbackForm]= useState(false)
    return (

    <div>
      <div className='mb-[50px]'>
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">All Reviews (272)</h4>
        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full'>
                    <img className='w-full' src={avatarIcon} alt="" />
                </figure>
                <div>
                    <h5 className="text-[16px] leading-6 text-PrimaryColor font-bold">
                        Ali Ahamad
                    </h5>
                    <p className="text-[14px] laeding-6 text-textColor">{formateDate("02-14-2023")}</p>
                    <div className="text__para mt-3 font-medium text-[15px]">Good services, highly recommended 👍</div>
                </div>
                <div className="flex gap-1">
                    {[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color='#0067ff' />)}
                </div>
                
            </div>
        </div>
        {!showFeedbackForm && <div className="text-center"><button className="btn" onClick={()=>setShowFeedbackForm(true)}>
            GiveFeedback</button></div>}
            {showFeedbackForm && <FeedbackForm />}
      </div>
    </div>
  )
}

export default feedback
