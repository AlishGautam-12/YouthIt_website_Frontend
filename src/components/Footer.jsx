// import React from 'react'
// import { FaFacebookSquare ,FaInstagramSquare,FaGithubSquare,FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
// <div>
//    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1> 
// <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur reiciendis explicabo possimus libero assumenda. Nesciunt.</p>
// <div className=' flex justify-between md:w-[75%] my-6'>

// <FaFacebookSquare size={30}/>
// <FaInstagramSquare size={30 }/>
// <FaGithubSquare size={30}/>
// <FaLinkedin size={30}/>
// </div>
// </div>
// <div className='lg:col-span-2 flex justify-between-b mt-6' ></div>
//    <div>
//     <h6 className='font-medium text-gray-400'>Solutions</h6>
//     <ul>
//       <li className='py-2 text-sm'> Analytics</li>
//       <li className='py-2 text-sm'>marketing</li>
//       <li className='py-2 text-sm'>Commerce</li>
//       <li className='py-2 text-sm'>Inslights</li>
//     </ul>
//    </div>
//    <div>
//     <h6 className='font-medium text-gray-400'>Company</h6>
//     <ul>
//       <li className='py-2 text-sm'> About</li>
//       <li className='py-2 text-sm'>Blog</li>
//       <li className='py-2 text-sm'>Jobs</li>
//       <li className='py-2 text-sm'>Press</li>
//       <li className='py-2 text-sm'>Careers</li>
//     </ul>
//    </div>
//    <div>
//     <h6 className='font-medium text-gray-400'>legal</h6>
//     <ul>
//       <li className='py-2 text-sm'> Claim</li>
//       <li className='py-2 text-sm'>Poilicy</li>
     
    
//     </ul>
//    </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import YouthITLogo from '../assets/youthit.png';


const YouthITFooter = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600'>
      {/* Left Section with Logo and About */}
      <div>
        <img src={YouthITLogo} className='w-32 mb-4' alt='YouthIT Logo' />
        <p className='py-4 text-sm'>Empowering young minds through tech education. Join us on our journey to transform learning.</p>
        <div className='flex space-x-4'>
          <a href="https://facebook.com/youthit" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={30} className='text-[#3b5998] hover:text-[#1877f2] transition-colors duration-300' /></a>
          <a href="https://instagram.com/youthit" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={30} className='text-[#e1306c] hover:text-[#c13584] transition-colors duration-300' /></a>
          <a href="https://github.com/youthit" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={30} className='text-[#333] hover:text-[#6e5494] transition-colors duration-300' /></a>
          <a href="https://linkedin.com/youthit" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className='text-[#0e76a8] hover:text-[#0077b5] transition-colors duration-300' /></a>
        </div>
      </div>

      {/* Middle Section - Solutions */}
      <div className='lg:col-span-2 flex justify-between-b mt-6'>
        <div className='ml-10'>
          <h6 className='font-medium text-gray-400'>Courses</h6>
          <ul className='mt-2'>
            <li className='py-1 text-sm'>Web Development</li>
            <li className='py-1 text-sm'>UI/UX Design</li>
            <li className='py-1 text-sm'>Backend Development</li>
          </ul>
        </div>
        <div className='ml-10'>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul className='mt-2'>
            <li className='py-1 text-sm'>About Us</li>
            <li className='py-1 text-sm'>Blog</li>
            <li className='py-1 text-sm'>Careers</li>
            <li className='py-1 text-sm'>Press</li>
          </ul>
        </div>
        <div className='ml-10'>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul className='mt-2'>
            <li className='py-1 text-sm'>Privacy Policy</li>
            <li className='py-1 text-sm'>Terms of Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YouthITFooter;
