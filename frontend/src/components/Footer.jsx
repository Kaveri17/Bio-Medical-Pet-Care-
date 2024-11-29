import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        {/* Logo Section */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src="logo.png" className="w-16 h-16 mr-2" alt="Vet Vitals Logo" />
          <h1 className="text-2xl font-bold text-blue-500">Vet Vitals</h1>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/animals" className="text-blue-600 hover:underline">
                Animals
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Contact Info</h2>
          <p>
            Sagarmatha College of Science and Technology
            <br />
            Sanepa, Lalitpur
          </p>
          <p>+977-987654321</p>
          <p className="text-blue-600">admin@weam2h.com</p>
        </div>

        {/* Appointment Button */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2"><i class="fa-solid fa-phone"></i>Call Us</h2>
          <button
            className="px-4 py-2 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition"
            onClick={() => window.location.href = 'tel:+977987654321'}
          >
            +977-987654321
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
