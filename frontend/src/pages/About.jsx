import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    {/* top about */}
    <div>
  <div className="ram w-full h-screen pb-8">
    <div className="py-20">
      <h1 className="text-3xl text-white text-center font-bold">About Us</h1>

      <div className="flex flex-wrap justify-center">
        <h1 className="text-white text-center font-semibold text-xl">
          <Link to="/">Home</Link>{" "}
          <span className="ps-2">
            <i className="fa-solid fa-greater-than text-white"></i>
          </span>
        </h1>
        <h1 className="text-white text-center font-semibold text-xl ">
          <Link to="/about" className='ps-2'>About Us</Link>
        </h1>
      </div>
    </div>
  </div>
</div>


<div className="w-5/6 mx-auto  pt-12">
  {/* About us section */}
  <div className="flex flex-col sm:flex-row justify-between gap-6 px-8">
 
    <div className="w-full sm:w-1/3 md:w-1/4">
      <h1 className="font-extrabold text-2xl sm:text-2xl md:text-3xl text-blue-900 pt-4">
        About Us 
      </h1>
      <span className="text-4xl sm:text-5xl tracking-wider font-semibold pt-3 text-sky-500 mt-2 block">
        Heath Care Tracking
      </span>
    </div>

   
    <div className="w-full sm:w-2/3 md:w-2/3 bg-blue-50 border border-solid px-4 py-4 sm:py-6 rounded-t-lg rounded-b-lg">
      <p className="text-base sm:text-xl font-normal leading-relaxed p-6 ">
        Proin eleifend in mi eu efficitur. Sed interdum lectus at consequat
        interdum. Sed sed sem neque. Integer ac volutpat est, non mollis dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  </div>
 
</div>
{/* team */}
<div className="pt-8 w-5/6 mx-auto pb-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 py-12">
    <div className="img1 aspect-square">
      <img src="g-1.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
    <div className="img2 aspect-square">
      <img src="g-2.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
    <div className="img3 aspect-square">
      <img src="g-6.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
    <div className="img4 aspect-square">
      <img src="g-7.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
  </div>
</div>

{/* about us desc */}
<div className="bg-blue-50 w-full pt-4">
<div className="w-5/6 mx-auto py-8  ">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-blue-50   ">
    {/* Text Section */}
    <div className="lg:w-2/3">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-blue-900 ">
        About Us
      </h1>
      <span className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-semibold text-sky-500 mt-4 block">
        The Finest Four Legged Care
      </span>
      <div className="mt-4">
        <p className="font-bold pt-4 pb-5 text-lg sm:text-xl">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-lg sm:text-xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div className="w-full lg:w-1/3 pt-5 img1">
      <img 
        src="/g-4.jpg" 
        alt="About Us" 
        className="rounded-lg shadow-lg w-full h-[300px] md:h-[700px] lg:h-[500px] object-cover" 
      />
    </div>
  </div>
</div>
</div>
{/* testominal */}

<div className="w-5/6 mx-auto pt-12 pb-12">
  <div className="flex flex-col lg:flex-row items-center gap-8 py-8">
    {/* Left Section: Text */}
    <div className="lg:w-3/5">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-blue-900">
        Testimonial
      </h1>
      <span className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-semibold text-sky-500 mt-4 block">
        What Customer Says
      </span>
      <p className="pb-5 text-gray-600 text-lg">
        Proin eleifend in mi eu efficitur. Sed interdum lectus at consequat interdum. Sed sed sem neque. Integer ac volutpat est, non mollis dolor.
      </p>

      {/* Testimonials Section */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2 ">
        <div className="border bg-blue-50 p-4 rounded-lg shadow-md w-full sm:w-1/2 pb-12  ">
      <h1 className='pb-3 text-xl'>⭐⭐⭐⭐⭐</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam voluptatibus earum totam ut. Sequi!
          </p>
          <div className="flex items-center mt-4 gap-6 pt-5 img1">
            <img
              src="/team1.jpg"
              alt="Jhon Doe"
              className="rounded-full w-20 h-19 object-cover "
            />
            <div className="ml-3">
              <h3 className="font-bold text-blue-900">Jhon Doe</h3>
              <span className="text-gray-500 text-sm">Pet Lover</span>
            </div>
          </div>
        </div>
        <div className="border bg-blue-50 p-4 rounded-lg shadow-md w-full sm:w-1/2">
        <h1 className='pb-3 text-xl '>⭐⭐⭐⭐⭐</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam voluptatibus earum totam ut. Sequi!
          </p>
          <div className="flex items-center mt-4 gap-6 pt-6 img1">
            <img
              src="/team2.jpg"
              alt="Jenifer Doe"
              className="rounded-full w-20 h-19 object-cover"
            />
            <div className="ml-3">
              <h3 className="font-bold text-blue-900">Jenifer Doe</h3>
              <span className="text-gray-500 text-sm">Pet Lover</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="lg:w-2/5 hidden md:hidden lg:block img1 ">
      <img
        src="/g-8.jpg"
        alt="Testimonial Image"
        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
      />
    </div>
  </div>
</div>







    </>
  )
}

export default About