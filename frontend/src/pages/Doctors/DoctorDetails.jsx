import React, { useState } from 'react';
import starIcon from '../../assets/images/Star.png';
import DoctorImg from '../../assets/images/userImg01.jpeg';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={DoctorImg} alt="" className='w-full' />
              </figure>
              <div>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Kuldeep Mehandi Artist</h3>
                <div className="text-[14px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" /> 0
                </div>
                <span className='text-[14px] lg:leading-7 font-semibold text-headingColor'>(272)</span>
              </div>
              <p className='text__para text-[14px] lg:leading-7 md:text-[15px] lg:max-w-[390pxs]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat corrupti deleniti fuga cum saepe. Quod labore cupiditate earum sequi cum. Possimus repudiandae magni harum dolores doloribus similique quibusdam tenetur eaque.</p>
            </div>
            <div className="mt-[50px] border-border-[#0066ff34]">
              <button onClick={() => setTab('about')} className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'about' && 'border-b border-solid border-primaryColor'}`}>About</button>
              <button onClick={() => setTab('feedback')} className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'feedback' && 'border-b border-solid border-primaryColor'}`}>Feedback</button>
            </div>
            <div className="mt-[50px]">
              {
                tab==='about' && <DoctorAbout /> 
              }
              {
                tab==='feedback' && <Feedback /> 
              }
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorDetails;
