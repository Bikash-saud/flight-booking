import React from 'react'
import { BsChatDots, BsPatchQuestion, BsPatchQuestionFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
const Help = () => {
  return (
    <div className=' '>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10  py-10 px-5 max-w-7xl mx-auto lg:px-0'>

        <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg '>
            <div className='text-center h-48  flex flex-col items-center justify-center w-full'>
                <BsPatchQuestion className='text-5xl text-primary' />
                <h1 className='text-md lg:text-lg font-bold mb-1 '>General queries</h1>
                <p className='text-2xl lg:text-3xl '><a href='callto:+880198564785'>+880198564785</a></p>
            </div>
        </div>

        <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg'>
            <div className='text-center h-48 w-full flex flex-col items-center justify-center'>
                <BsChatDots className='text-5xl text-primary' />
                <h1 className='text-md lg:text-lg font-bold mb-1 '>Live Chat</h1>
                <p className='text-2xl lg:text-3xl'><a href='callto:+880198564785'>+88098564785</a></p>
            </div>
        </div>

        <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg'>
            <div className='text-center h-48 w-full flex flex-col items-center justify-center'>
                <BiSupport className='text-5xl text-primary' />
                <h1 className='text-md lg:text-lg font-bold mb-1'>Support Center</h1>
                <p className='text-2xl lg:text-3xl '><a href='callto:+880198564785'>+880458564785</a></p>
            </div>
        </div>
    </div>



    {/* <div>
        <iframe src="https://www.google.com/maps/place/New+highway+wines+and+cafe/@28.9565477,80.2211286,16.75z/data=!4m6!3m5!1s0x39a1af0005f4b941:0x5ce12997ff77401c!8m2!3d28.9590246!4d80.2196667!16s%2Fg%2F11y9_6l9hm?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" height="500" loading="lazy" className='w-full'></iframe>
    </div> */}

</div>

  )
}

export default Help