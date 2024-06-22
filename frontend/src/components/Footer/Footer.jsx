import React from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube,AiFillGithub,AiFillInstagram } from 'react-icons/ai'
const socialLinks = [
  {
    path:"https://www.youtube.com/",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://https://github.com/devmuhib/Youtube-2023/blob/MERN-Medicare-Booking-Website/frontend/src/assets/images/logo.png.com/",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://www.instagram.com/",
    icon:<AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://www.linkedin.com/",
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  }
];
const quickLinks01=[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  },
];
const quickLinks02=[
  {
  path:"/find a doctor",
  display:"Find a artist"
  },
  {
    path:"/",
    display:"request appointment"
    },
    {
      path:"/",
      display:"Find a location"
      },
      {
        path:"/find a doctor",
        display:"Get an opinion"
        }
];
const quickLinks03 =[
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact us"
    },
]
const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className='pb-16 pt-10'>
    <div className="container"  >
      <div className="flex justify-between flex-row md:flex-rowflex-wrap gap-[30px]">
          <div>
           <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} developed by Harshini Devarajan all rights reserved.</p>
           <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index)=> 
            <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              {link.icon}
            </Link>)}
           </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
            <ul>
              {quickLinks01.map((item,index)=> 
              <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I would like to</h2>
            <ul>
              {quickLinks02.map((item,index)=> 
              <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
            <ul>
              {quickLinks03.map((item,index)=> 
              <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
          </div>
      </div>
    </div>
    
  </footer>
}

export default Footer
