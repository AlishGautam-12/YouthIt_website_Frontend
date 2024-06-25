import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-16 text-white px-4 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl  font-bold py-2'>Want tips & tricks to empower young minds with technology?</h1>
           <p>Sign up to our newsletter and stay updated with the latest in youth tech education.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input  className='p-3 flex w-full rounded-md text-black type'type='email' placeholder='Enter Email'/>
                    <buttton className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 px-6 my-6  py-3 hover:bg-[#00c48a]">Notify Me</buttton>
                </div>
                <p>WE care about the protection of your data <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
            

        </div>

    </div>
  )
}

export default Contact