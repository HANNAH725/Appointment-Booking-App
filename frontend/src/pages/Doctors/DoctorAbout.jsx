import React from 'react';
import { formateDate } from '../../utils/formateDate';
import images from "../../assets/images/69b73b72ee92ac86314119ca8681ee52.jpg"
import image1_url from "../../assets/images/91U+UM5jMBL.png"
import image3_url from "../../assets/images/arabic-mehndi-designs-for-weddings-1.jpg"
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingcolor font-semibold flex items-center gap-2'>
          About <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
              Kuldeep Mehandi Artist
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis enim soluta eum officia eaque voluptate. Quidem quis pariatur eius reprehenderit sit alias rerum magni inventore, quos ut? Suscipit, voluptas?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                6+ years of Experience
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">Rajasthani, Marwadi, Punjabi Mehandi</p>
            </div>
            
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                09-05-2019 Inaugural Day
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">Rajasthani, Marwadi, Punjabi Mehandi</p>
              <p className='text-[14px] leading-5 font-medium text-textColor'>New Friends Colony, New Delhi NCR</p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                Artistic Excellence
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">Kuldeep's mehandi designs are known for their intricate patterns and modern flair.</p>
            </div>
            
          </li>
          <div className="flex gap-4 mt-4 sm:mt-0">
              <img src={images} alt="Mehandi Design 1" className="w-[150px] h-[150px] object-cover" />
              <img src={image1_url} alt="Mehandi Design 2" className="w-[150px] h-[150px] object-cover" />
              <img src={image3_url} alt="Mehandi Design 3" className="w-[150px] h-[150px] object-cover" />
            </div>
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
