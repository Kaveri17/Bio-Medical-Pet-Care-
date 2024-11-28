import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen w-full flex flex-col md:flex-row pt-24 pb-12 items-center bg-gradient-to-r from-blue-300 via-blue-200 to-white p-10">
        {/* Text Content */}
        <div className="flex flex-col items-start w-full md:w-1/2 px-6 md:px-20 space-y-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-snug">
            Time for You <br /> and Your Animal
          </h1>
          <p className="text-blue-600 text-xl md:text-2xl leading-relaxed">
            The Caring <br /> Professional Team
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full text-lg hover:bg-blue-600 transition-shadow shadow-lg">
            Discover More
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 px-6 md:px-10">
          <img
            src="dog.jpeg"
            alt="A happy dog"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16 px-6 md:px-16">
        <h2 className="text-center text-4xl font-bold mb-12 text-blue-600">
          Why Choose Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
            <img
              src="dog.jpeg"
              alt="Experience Icon"
              className="w-24 h-24 mb-6 rounded-full shadow-md"
            />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              30+ Years of Experience
            </h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
            <img
              src="dog.jpeg"
              alt="Animal Lover Icon"
              className="w-24 h-24 mb-6 rounded-full shadow-md"
            />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Animal Lover
            </h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
            <img
              src="dog.jpeg"
              alt="Certified Doctor Icon"
              className="w-24 h-24 mb-6 rounded-full shadow-md"
            />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Certified Doctor
            </h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Care Section */}
      <div className="bg-white py-16 px-6 md:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-700">
            Quality Pet Care and Those Funny Neck Cones
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Socius consetetur nateque ineptos. Leo cursus massa morbi vehicula. Hendrerit ornare liora tincidunt 
            ridiculus mauris eget. Interdum dictum velit accumsan.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
          {/* Testimonial 1 */}
          <div className="bg-blue-100 p-8 rounded-2xl shadow-lg max-w-lg">
            <p className="text-gray-600 italic mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim neque. Integer ac volutpat erat."
            </p>
            <h4 className="font-semibold text-xl text-gray-800">Dave Doe</h4>
            <p className="text-gray-500">Pet Lover</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-blue-100 p-8 rounded-2xl shadow-lg max-w-lg">
            <p className="text-gray-600 italic mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim neque. Integer ac volutpat erat."
            </p>
            <h4 className="font-semibold text-xl text-gray-800">Jennifer Doe</h4>
            <p className="text-gray-500">Pet Lover</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-6 text-gray-700">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Finest Four Legged Care. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Jonathan Doe
            </p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Read More
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="images.jpeg" 
              alt="About Us" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
