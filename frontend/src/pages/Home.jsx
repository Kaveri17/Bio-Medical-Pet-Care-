import React from 'react';

const Home = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col md:flex-row pt-32 items-start pl-10'>
        <div className='flex flex-col items-start w-full md:w-2/3'>
          <div className='text-red-400 text-5xl font-extrabold text-left'>
            Time for you and your animal
          </div>
          <div className='text-blue-400 text-bold text-3xl font-light mt-2 text-left leading-10 pt-20 pb-20'>
            The Caring<br /> Professional Team
          </div>
          
          <button className='mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full text-lg hover:bg-blue-600 transition '>
            Discover More
          </button>
        </div>


        <div className='flex justify-end pr-10'>
          <img src="dog.jpeg" alt="A dog" className='w-full h-full object-cover rounded-lg' />
        </div>
      </div>

     
      <div className='bg-blue-200 py-10'>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='flex flex-col items-center p-5'>
            <img src="dog.jpeg" alt="Experience Icon" className='w-16 h-16' />
            <h3 className='text-xl font-bold mt-2'>30 Years Of Experience</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <img src="dog.jpeg" alt="Animal Lover Icon" className='w-16 h-16' />
            <h3 className='text-xl font-bold mt-2'>Animal Lover</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <img src="dog.jpeg" alt="Certified Doctor Icon" className='w-16 h-16' />
            <h3 className='text-xl font-bold mt-2'>Certified Doctor</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>



      {/* Quality Care Section */}
      <div className=' py-10'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-3xl font-bold mb-4'>Quality Pet Care and Those Funny Neck Cones</h2>
          <p className='max-w-2xl text-lg px-4'>
            Socius consetetur nateque ineptos. Leo cursus massa morbi vehicula. 
            Hendrerit ornare liora tincidunt ridiculus mauris eget. Interdum dictum velit accumsan.
          </p>
        </div>
      </div>




      {/* Testimonial Section */}
      <div className='bg-white py-10'>
        <h2 className='text-3xl font-bold text-center mb-6'>What Customers Say</h2>
        <div className='flex flex-col md:flex-row justify-around items-start px-10'>
          <div className='bg-gray-100 p-5 rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3'>
            <p className='text-gray-600 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim neque. Integer ac volutpat erat, non mollis dolor."</p>
            <h4 className='font-semibold mt-2'>Dave Doe</h4>
            <p className='text-gray-500'>Pet Lover</p>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg shadow-md w-full md:w-1/3'>
            <p className='text-gray-600 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim neque. Integer ac volutpat erat, non mollis dolor."</p>
            <h4 className='font-semibold mt-2'>Jenifer Doe</h4>
            <p className='text-gray-500'>Pet Lover</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;