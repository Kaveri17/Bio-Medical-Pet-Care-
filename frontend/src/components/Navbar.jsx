import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
// import getCookieValue from "../api/getCookieValue";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    console.log('Navbar state:', navbar); // Debugging line
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [navbar]);

  const handleClickOutside = (e) => {
    console.log('Clicked outside'); // Debugging line
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNavbar(false);
    }
  };

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="bg-white text-base py-4 sticky top-0 shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 w-full">
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
            <span className="heading text-2xl sm:text-3xl text-blue-900 ps-2 font-bold">
              Vite Vitals
            </span>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="nav-content w-1/3 md:w-2/3 hidden md:flex justify-between items-center list-none text-lg font-medium ">
          <Link to="/">
            <li className="text-black hover:text-blue-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-black hover:text-blue-500">About Us</li>
          </Link>
          <Link to="/animals">
            <li className="text-black hover:text-blue-500">Animals</li>
          </Link>
          <Link to="/contact">
            <li className="text-black hover:text-blue-500">Contact Us</li>
          </Link>
          {/* <Link to="/login">
            <li className="text-black hover:text-blue-500">Login</li>
          </Link> */}
          <Link to="/register">
            <li className="text-black hover:text-blue-500 ">Register</li>
          </Link>
        </div>

        {/* <div className="profile w-[55px] h-[50px] flex justify-center items-center rounded-full text-white bg-[#023478] overflow-hidden mx-4">
  <img src="/team2.jpg" alt="Profile" className="w-full h-full object-cover" />
</div> */}
 <div className="relative">
      {/* Profile Image */}
      <div
        className="profile w-[55px] h-[50px] flex justify-center items-center rounded-full text-white bg-[#023478] overflow-hidden mx-4 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
      >
        <img src="/team2.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1 text-sm text-gray-700">
           
            <li>
              <a
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Login
              </a>
            </li>
            <hr />
            <li>
              <a
                href="/admin/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Dashboard
              </a>
            </li>
            <hr  className=""/>
            <li>
              <a
                href="/logout"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>

      


        {/* Mobile Menu Toggle */}
        <div onClick={handleNavbar} className="md:hidden cursor-pointer">
          <IoMenu className="text-black text-3xl" />
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
          <IoClose className="text-black text-3xl" />
        </div>
        
        {/* Mobile Links */}
        <div className="list-none pt-16 text-lg sm:text-xl">
          <Link to="/">
            <li className="py-4 text-black hover:text-blue-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="py-4 text-black hover:text-blue-500">About Us</li>
          </Link>

          <Link to="/animals">
            <li className="py-4 text-black hover:text-blue-500">Animals</li>
          </Link>

          <Link to="/contact">
            <li className="py-4 text-black hover:text-blue-500">Contact Us</li>
          </Link>
          <Link to="/register">
            <li className="py-4 text-black hover:text-blue-500">Register</li>
          </Link>
          <Link to="/login">
            <li className="py-4 text-black hover:text-blue-500">Login</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
