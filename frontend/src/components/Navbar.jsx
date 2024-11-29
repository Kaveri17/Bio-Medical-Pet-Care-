import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNavbar(false);
    }
  };

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="bg-white text-base py-4 sticky">
      <div className="flex justify-between items-center px-2 py-2 w-11/12 mx-auto">
        {/* Logo and Title */}
        <div className="w-2/3 md:w-1/3 flex items-center">
          <div className="logo w-[20%] sm:w-[22%] md:w-[20%] lg:w-[12%]">
            <img
              src="/logo.png"
              alt="Vite Vitals"
              className="rounded-full w-full"
            />
          </div>
          <Link to="/">
            <span className="heading text-2xl sm:text-3xl text-white ps-2">
             Vite Vitals
            </span>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="nav-content w-1/3 md:w-2/3 hidden md:flex justify-between list-none text-lg font-medium">
          <Link to="/">
            <li className="text-black hover:text-blue-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-black hover:text-blue-200">About Us</li>
          </Link>
          <Link to="/animals">
            <li className="text-black hover:text-blue-200">Animals</li>
          </Link>
          <Link to="/contact">
            <li className="text-black hover:text-blue-200">Contact Us</li>
          </Link>
          <Link to="/login">
            <li className="text-black hover:text-blue-200">Login</li>
          </Link>
          <Link to="/register">
            <li className="text-black hover:text-blue-200">Register</li>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNavbar} className="md:hidden cursor-pointer">
          <IoMenu className="text-black cursor-pointer text-3xl" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          navbar
            ? "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-white p-10 ease-in duration-100 z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
        }
        ref={sidebarRef}
      >
        {/* Close Button */}
        <div className="flex justify-end cursor-pointer" onClick={handleNavbar}>
          <IoClose className="text-white cursor-pointer text-3xl" />
        </div>
        
        {/* Mobile Links */}
        <div className="list-none pt-16 text-lg sm:text-xl">
          <Link to="/">
            <li className="py-4 text-white hover:text-blue-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="py-4 text-white hover:text-blue-200">About Us</li>
          </Link>

          <Link to="/animals">
            <li className="py-4 text-white hover:text-blue-200"> Animals
            
            </li>
          </Link>

          <Link to="/contact">
            <li className="py-4 text-white hover:text-blue-200">Contact Us</li>
          </Link>
          <Link to="/register">
            <li className="py-4 text-white hover:text-blue-200">Register</li>
          </Link>
          <Link to="/login">
            <li className="py-4 text-white hover:text-blue-200">Login</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
