// import React from 'react'
import Backend from '../assets/backend.jpg'
import Ui from '../assets/ui.jpg'
import Web from '../assets/web.jpg'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";



import React from 'react';

const Course = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Web Development Course Card */}
        <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-24 mx-auto -mt-12' src={Web} alt="Web Development" />
          <h2 className='text-3xl font-bold text-center py-6'>Web Development</h2>
          <p className='text-center text-5xl  font-bold text-[#00df9a] flex'><TbCurrencyRupeeNepalese   className='ml-12 '/> 15000</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>Access to full course materials</p>
            <p className='py-2 border-b mx-8'>Live instructor-led sessions</p>
            <p className='py-2 border-b mx-8'>Practical hands-on projects</p>
          </div>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium mt-6 mx-auto py-3 hover:bg-[#00c48a]">
            Enroll Now
          </button>
        </div>

        {/* UI/UX Design Course Card */}
        <div className='w-full shadow-lg flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-24 mx-auto -mt-12' src={Ui} alt="UI/UX Design" />
          <h2 className='text-3xl font-bold text-center py-6'>UI/UX Design</h2>
          <p className='text-center text-5xl  font-bold text-[#00df9a] flex'><TbCurrencyRupeeNepalese   className='ml-12 '/> 20000</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>Comprehensive design principles</p>
            <p className='py-2 border-b mx-8'>Hands-on prototyping exercises</p>
            <p className='py-2 border-b mx-8'>User-centered design approach</p>
          </div>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium mt-6 mx-auto py-3 hover:bg-[#00c48a]">
            Enroll Now
          </button>
        </div>

        {/* Backend Development Course Card */}
        <div className='w-full shadow-lg flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-24 mx-auto -mt-12' src={Backend} alt="Backend Development" />
          <h2 className='text-3xl font-bold text-center py-6'>Backend Development</h2>
          <p className='text-center text-5xl  font-bold text-[#00df9a] flex'><TbCurrencyRupeeNepalese   className='ml-12 '/> 10000</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>Database management techniques</p>
            <p className='py-2 border-b mx-8'>Server-side scripting languages</p>
            <p className='py-2 border-b mx-8'>RESTful API development</p>
          </div>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium mt-6 mx-auto py-3 hover:bg-[#00c48a]">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
