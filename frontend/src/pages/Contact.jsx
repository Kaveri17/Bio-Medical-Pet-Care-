import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="w-full h-64 relative">
        <img src="1stimg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white">
          <h2 className="text-3xl font-bold">CONTACT</h2>
          <div className='flex-wrap flex flex-row justify-center'>
            <h1 className='text-white text-center font-semibold text-xl'>
              <Link to='/'>Home</Link> 
              <span className='ps-2'> <i className="fa-solid fa-greater-than text-white"></i> </span>
            </h1>
            <h1 className='text-white text-center font-semibold text-xl ps-2'>
              <Link to='/contact'>Contact</Link>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-around mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
        <div className="w-full md:w-2/5 flex flex-col pr-10">
          <h2 className="text-4xl font-semibold text-gray-800 pb-6 mb-6">
            Contact Info
            <div className="border-b-2 border-blue-200 w-16 pt-2"></div>
          </h2>
          <p className="text-gray-600 mb-4 pb-8">
            For inquiries or further information, please feel free to reach out
            to us or call us. You can also connect with us through our social
            media channels. We’re here to assist you and look forward to hearing
            from you!
          </p>
          <div className="space-y-2 mb-6">
            <span className="text-blue-300 pb-2">
              <i className="fa-solid fa-phone text-xl mr-4"></i>
            </span>
            <span className="cursor-pointer"> +977-987654321</span>
            <br className="mb-1" />
            <br className="mb-1" />
            <span className="text-blue-300">
              <i className="fa-solid fa-message text-xl mr-4"></i>
            </span>
            <span className="cursor-pointer"> contact@domain.com</span>
            <br />
            <br className="mb-1" />
            <span className="text-blue-300">
              <i className="fa-solid fa-link text-xl mr-4"></i>
            </span>
            <span className="cursor-pointer"> www.contactdomain.com</span>
            <br />
            <br className="mb-1" />
            <span className="text-blue-300">
              <i className="fa-solid fa-location-crosshairs text-xl mr-4 pb-5"></i>
            </span>
            <span className="cursor-pointer"> Sanepa, Lalitpur</span>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.940348876112!2d85.29995187546668!3d27.68823847619348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb184a281e7491%3A0xf947496b7f4831a7!2sSagarmatha%20College%20of%20Science%20and%20Technology%20%5BSCST%5D!5e0!3m2!1sen!2snp!4v1726974034459!5m2!1sen!2snp"
              width="600"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start mr-9 mt-8 md:mt-0">
          <h2 className="text-4xl font-semibold text-gray-800 pb-6">
            Get In Touch
            <div className="border-b-2 border-blue-200 w-16 pt-2"></div>
          </h2>
          <form className="w-full bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 text-xl"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <i className="fa-solid fa-user text-black p-2"></i>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <i className="fa-solid fa-envelope text-black p-2"></i>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 text-xl"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-2/5 text-blue-300 py-2 border border-blue-300 transition duration-200 hover:bg-blue-200 hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-12">
        
        
        <div className="flex justify-center mb-6">
          <img src="g-3.jpg" alt="Image 1" className="w-1/3 rounded-lg mx-2" />
          <img src="g-4.jpg" alt="Image 2" className="w-1/3 rounded-lg mx-2" />
          <img src="g-5.jpg" alt="Image 3" className="w-1/3 rounded-lg mx-2" />
        </div>
        <div className="bg-gray-100 py-16 px-4">
  <h2 className="text-5xl font-bold text-gray-900 text-center mb-8">
    Have Questions?
  </h2>
  <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
    Roin eleifend in mi eu efficitur. Sed interdum lectus at consequat interdum. 
    Sed sed sem neque. Integer ac volutpat est, non mollis dolor. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper malesuada.
  </p>
  <div className="text-center">
    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      Send A Message
    </button>
  </div>
</div>

      </div>
    </>
  );
};

export default Contact;