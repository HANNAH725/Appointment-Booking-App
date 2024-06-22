import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import MyBookings from '../user-account/MyBookings';
import Profile from './Profile';

const Dashboard = () => {
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
          <div className='md:col-span-2 md:px-[30px]'>
            {/* <button onClick={()=>setTab("bookings")}  className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'} py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My Bookings</button> */}
            <button onClick={() => setTab("settings")} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
            {/* {
              tab === "bookings" && <MyBookings />
            } */}
            {
              tab === "settings" && <Profile />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

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
      navigate('/doctors/profile/me'); // Redirect to account page after successful login
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
};

export default Dashboard;
