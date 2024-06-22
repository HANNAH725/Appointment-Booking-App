import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import MyBookings from './MyBookings';
import Profile from './Profile';
import faqImg from "../../assets/images/faqImg.png"
const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page after logout
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  // Check if the user is logged in
  if (!isLoggedIn) {
    return <Login loginHandler={loginHandler} />;
  }

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                <img src={faqImg} alt="" className="w-full h-full rounded-full" />
              </figure>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">Ujjal Zaman</h3>
              <p className="text-textColor text-[15px] loading-6 font-medium">Coimbatore</p>
              <p className="text-textColor text-[15px] loading-6 font-medium"><span className='ml-2 text-headingColor text-[13px] leading-8'>Bridal Mehndi</span></p>
            </div>
            <div className="mt-[50px] md:mt-[100px]">
              <button onClick={logoutHandler} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
              <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Delete Account</button>
            </div>
          </div>
          <div className='md:col-span-2 md:px-[30px]'>
            {/* <button onClick={()=>setTab("bookings")}  className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'} py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My Bookings</button> */}
            <button onClick={()=>setTab("settings")} className={`${tab==='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>ProfileSettings</button>
            {/* {
              tab==="bookings" && <MyBookings />
            } */}
            {
              tab==="settings" && <Profile />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

const Login = ({ loginHandler }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log(formData);
    // Simulate successful login for demonstration purposes
    const loginSuccessful = true;
    if (loginSuccessful) {
      loginHandler();
      navigate('/users/profile/me'); // Redirect to account page after successful login
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span>
        </h3>
        <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              name="password"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an Account?{' '}
            <Link to='/register' className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default MyAccount;
