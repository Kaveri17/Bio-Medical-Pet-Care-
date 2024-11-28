import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    {/* top about */}
    <div>
  <div className="ram w-full h-screen">
    <div className="py-20">
      <h1 className="text-3xl text-white text-center font-bold">About Us</h1>

      <div className="flex flex-wrap justify-center">
        <h1 className="text-white text-center font-semibold text-xl">
          <Link to="/">Home</Link>{" "}
          <span className="ps-2">
            <i className="fa-solid fa-greater-than text-white"></i>
          </span>
        </h1>
        <h1 className="text-white text-center font-semibold text-xl ">/
          <Link to="/about" className='ps-2'>About Us</Link>
        </h1>
      </div>
    </div>
  </div>
</div>


<div className="w-5/6 mx-auto px-4 pt-12">
  {/* About us section */}
  <div className="flex flex-col sm:flex-row justify-between gap-6">
 
    <div className="w-full sm:w-1/3 md:w-1/4">
      <h1 className="font-extrabold text-2xl sm:text-2xl md:text-3xl text-blue-900 pt-4">
        About us 
      </h1>
      <span className="text-4xl sm:text-5xl tracking-wider font-semibold text-sky-500 mt-2 block">
        Heath Care Tracking
      </span>
    </div>

   
    <div className="w-full sm:w-2/3 md:w-2/3 bg-blue-50 border border-solid px-4 py-4 sm:py-6">
      <p className="text-base sm:text-xl font-normal leading-relaxed ">
        Proin eleifend in mi eu efficitur. Sed interdum lectus at consequat
        interdum. Sed sed sem neque. Integer ac volutpat est, non mollis dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  </div>
</div>



    </>
  )
}

export default About