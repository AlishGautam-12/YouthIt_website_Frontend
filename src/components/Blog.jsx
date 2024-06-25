import React from 'react'
import Youth from '../assets/youth.jpg' 


const Blog = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img  className='w-[500px] mx-auto my-4 rounded-xl' src={Youth} alt='/'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '>YouthIT Empowerment Dashboard </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl'>Empower Youth Through Technology</h1>
            <p>Empower youth with digital skills and technology education to shape their futures positively. YouthIT provides accessible tools and resources for young people to innovate and thrive in a digital world.</p>
       <button className='bg-black text-[#68dfb9] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0- mx-auto py-3 hover:bg-[#00c48a]'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Blog;