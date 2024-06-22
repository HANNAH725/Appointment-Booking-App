import React, { useState } from 'react';
// import signup from '../assets/images/singnup.jpg';
// import avatar from '../assets/images/avatarIcon.png';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    gender: '',
    role: '',
    Speciality:''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Make API call to register the user

    // Navigate to the Home page upon successful registration
    navigate('/');
  };

  return (
    <div>
      <section className='px-55 xl:px-0'>
        <div className="max-w-[1170px] mx-auto">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
            {/* <div className="hidden lg:block bg-primaryColor rounded-l-lg">
              <figure className='rounded-l-lg'>
                <img src={signup} alt="Signup" />
              </figure>
            </div> */}
            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                Create an <span className='text-primaryColor'>account</span>
              </h3>

              <form onSubmit={submitHandler}>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    name="password"
                    required
                  />
                </div>
                <input
  type="text"
  placeholder="Enter your Specialty"
  value={formData.specialty}
  onChange={handleInputChange}
  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
  name="specialty" // Change the name to "specialty"
  required
/>



                <div className="mt-5 flex items-center justify-between">
                  <label className='text-headingColor font-bold text-[16px] leading-7'>
                    Are you a:
                    <select name="role" value={formData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                      <option value="artist">Artist</option>
                      <option value="customer">Customer</option>
                    </select>
                  </label>
                  <label className='text-headingColor font-bold text-[16px] leading-7'>
                    Gender
                    <select name="gender" value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Other</option>
                    </select>
                  </label>
                </div>
                <div className="mb-5 flex items-center gap-3">
                  {/* <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center justify-center">
                    
                  </figure> */}
                  <div className="mb-5 flex items-center gap-3">
  {/* <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center justify-center">
    
  </figure> */}
  <div className='relative w-[160px] h-[50px]'>
    <input
      type="file"
      name="photo"
      id="customFile"
      accept=".jpg, .png"
      onChange={handleFileInputChange}
      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
    />
    <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff06] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
  </div>
</div>
<div className="mt-[-20px]"> {/* Adjust the negative margin-top value as needed */}
  <span className="text-sm text-gray-500">(Optional)</span>
</div>

                </div>
                <div className="mt-7">
                  <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                    Update
                  </button>
                  <div>
                    {/* <p className="mt-5 text-textColor text-center">
                      Already have an Account? <Link to='/login' className="text-primaryColor font-medium ml-1"><b>Login</b></Link>
                    </p> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Profile;
