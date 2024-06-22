import React from 'react'
import userImg01 from '../assets/images/userImg01.jpeg'
import mehandi2 from '../assets/images/mehandi2.jpg'
import mehandi1 from '../assets/images/mehandi1.jpeg'
import girl from '../assets/images/girl.jpg'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import About from '../components/About/About'
import { Link } from 'react-router-dom'
import { BsArrowRight, } from 'react-icons/bs';
import ServiceList from '../components/Services/ServiceList'
import feature from '../assets/images/feature.jpg'
import avatarIcon from '../assets/images/avatarIcon.png' 
import DoctorList from '../components/Doctors/DoctorList'
import faqImg from '../assets/images/faqImg.png'
import FaqList from '../components/Faq/FaqList'
import Testimonal from '../components/Testimonal/Testimonal'
const Home = () => {
  return (
  <>

  {/********hero section */}
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* hero content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>There is beauty in Simple Mehandi</h1>
              <p className='text-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde molestias tempora quis at beatae neque, in modi non culpa. Excepturi iure quam ipsam porro beatae placeat asperiores deleniti cupiditate?</p>
              <button className='btn'>Request an Appointment</button>
            </div>
            {/* hero counter */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex:row lg:items-center gap-5 lg:gap-[30px]"></div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">6+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Years of Experience</p>
            </div>
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex:row lg:items-center gap-5 lg:gap-[30px]"></div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">500+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Artists</p>
            </div>
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex:row lg:items-center gap-5 lg:gap-[30px]"></div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">4589+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Cities</p>
            </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={userImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={mehandi2} className="w-full mb-[30px]" alt="" />
                <img src={mehandi1} alt="w-full" className='w-full' />
              </div>
              
            </div>
        </div>
      </div>
    </section>
    {/* section end */}
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className='heading text-center'>Providing best service to people</h2>
          <p className='text__para text-center'>Find Best Mehndi Artist with thousands of trusted reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className="py-[30px] px-5">
            <div className="flex items-center justify-center"><img src={girl} alt="" /></div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Mehandi Artist</h2>
              <p className='text-[16px] leading-1 text-textColor font-[400] mt-4 text-center'>This app helps you find best artists with prices,reviews at a click of a button</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-{#181A1E} mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border:none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center"><img src={icon02} alt="" /></div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Review artist</h2>
              <p className='text-[16px] leading-1 text-textColor font-[400] mt-4 text-center'>This app helps you find best artists with prices,reviews at a click of a button</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-{#181A1E} mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border:none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center"><img src={icon03} alt="" /></div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
              <p className='text-[16px] leading-1 text-textColor font-[400] mt-4 text-center'>This app helps you find best artists with prices,reviews and book Appointment at a click of a button</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-{#181A1E} mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border:none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about sec start */}
    <About />
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Services</h2>
          <p className='text_para text_center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde molestias tempora quis at beatae 
          neque, in modi non culpa. Excepturi iure quam ipsam porro beatae placeat asperiores deleniti cupiditate?</p> 
          
        </div>
        <ServiceList /> 
      </div>
    </section>
    
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* feaure content */}
          <div className="xl:w-[670px]">
            <h2 className='heading'>Get your Mehandi in <br />no time</h2>
            <br />
            <ul className='pl-4'>
              <li className='text__para'>
                1.Get your appointment directly.
              </li>
              <br />
              <li className='text__para'>
                2.Search your Mehandi Artist here,and contact them directly.
              </li>
              <br />
              <li className="text__para">3.View our Mehandi Artist who are accepting new customers,use the online scheduling tool to select appointment time</li>
            
              <br />
              </ul>
              <Link to='/'>
                <button className="btn">Learn More</button>
              </Link>
          </div>
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={feature} className="w-3/4" alt="" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:;eft-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap:3">
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>10:00</p>

                </div>
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">Booking</div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Sonali</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Artists</h2>
          <p className='text_para text_center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde molestias tempora quis at beatae 
          neque, in modi non culpa. Excepturi iure quam ipsam porro beatae placeat asperiores deleniti cupiditate?</p> 
        </div>
        <DoctorList />
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our beloved customers</h2>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
    <section>
      
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Artists</h2>
          <p className='text_para text_center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde molestias tempora quis at beatae 
          neque, in modi non culpa. Excepturi iure quam ipsam porro beatae placeat asperiores deleniti cupiditate?</p> 
        </div>
       <Testimonal />
        </div>
      
    </section>
  </>
  );

};

export default Home