import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className=" py-10 p-4">
      <div className="flex justify-between items-center">

      <div className="flex justify-center">
  <ul className="hidden lg:flex space-x-10 text-bold text-xl items-center">
    {/* Logo */}
    <li>
      <img src="logo.png" alt="Logo" className="w-16 h-auto" />
    </li>

    <li><Link to="/" className="text-black hover:text-blue-400">Home</Link></li>
    <li><Link to="/about" className="text-black hover:text-blue-400">About</Link></li>
    <li><Link to="/animals" className="text-black hover:text-blue-400">Animals</Link></li>
    <li><Link to="/contact" className="text-black hover:text-blue-400">Contact</Link></li>
    <li><Link to="/login" className="text-black hover:text-blue-400">Login</Link></li>
    <li><Link to="/register" className="text-black hover:text-blue-400">Register</Link></li>
    <i className="fa-regular fa-bell text-yellow-500 text-2xl"></i>
  </ul>
</div>


      </div>
    </div>
  );
};

export default Navbar;
