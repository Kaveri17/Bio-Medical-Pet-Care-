import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-200 py-10  '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start px-6'>
        {/* Logo Section */}
        <div className='flex items-center mb-6 md:mb-0'>
          <img src="logo.png"  className='w-16 h-16 mr-2' />
          <h1 className='text-2xl font-bold text-blue-500'>Vet Vitals</h1>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col mb-6 md:mb-0'>
          <h2 className='text-lg font-bold mb-2'>Quick Links</h2>
          <ul className='space-y-1'>
            <li><a href="#" className='text-blue-600 hover:underline'>Home</a></li>
            <li><a href="#" className='text-blue-600 hover:underline'>About </a></li>
            <li><a href="#" className='text-blue-600 hover:underline'>Animals</a></li>
            <li><a href="#" className='text-blue-600 hover:underline'>Contact</a></li>
            <li><a href="#" className='text-blue-600 hover:underline'>Login</a></li>
            <li><a href="#" className='text-blue-600 hover:underline'>Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col mb-6 md:mb-0'>
          <h2 className='text-lg font-bold mb-2'>Contact Info</h2>
          <p>Sagarmatha College of Science and Technology<br />Sanepa,Lalitpur</p>
          <p>+977-987654321</p>
          <p className='text-blue-600'>admin@weam2h.com</p>
        </div>

        {/* Appointment Button */}
        <div className='flex flex-col items-center'>
          <h2 className='text-lg font-bold mb-2'>Call Us</h2>
          <button className='px-4 py-2 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition'>
          +977-987654321
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;