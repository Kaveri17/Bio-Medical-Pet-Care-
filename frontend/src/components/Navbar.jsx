import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { authenticate, logout } from "../api/Userapp";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const sidebarRef = useRef(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  const { isAuthenticated, user, loginState, logoutState } = useUserStore(); // Access Zustand state and actions

  useEffect(() => {
    // console.log('Navbar state:', navbar); // Debugging line
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [navbar]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await authenticate();
        if (response.success) {
          // setIsAuthenticated(true);
          // setUser(response.user); // Contains user details like name, admin status
          loginState(response.user); // Update Zustand store with the user data
        } else {
          // setIsAuthenticated(false);
          // setUser(null);
          logoutState()
        }
      } catch (error) {
        console.error("Error checking auth status");
        // setIsAuthenticated(false);
        logoutState()

      }
    };
    checkAuthStatus();
  }, [loginState, logoutState]);

  const handleClickOutside = (e) => {
    console.log("Clicked outside"); // Debugging line
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNavbar(false);
    }
  };

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleLogout = async () => {
    try {
      await logout();
      logoutState();
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
          {isAuthenticated ? (
            <>
              <li
                className="text-black hover:text-blue-500 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
              <li className="text-black">Welcome, {user?.username || "User"}</li>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="text-black hover:text-blue-500">Login</li>
              </Link>
              <Link to="/register">
                <li className="text-black hover:text-blue-500 ">Register</li>
              </Link>
            </>
          )}
        </div>

        {isAuthenticated && (
          <div className="profile w-[55px] h-[50px] flex justify-center items-center rounded-full text-white bg-[#023478] overflow-hidden mx-4">
            <img
              src="/team2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}

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

          {isAuthenticated ? (
             <li
             className="py-4 text-black hover:text-blue-500 cursor-pointer"
             onClick={handleLogout}
           >
             Logout
           </li>
          ) : (
            <>
              <Link to="/register">
                <li className="py-4 text-black hover:text-blue-500">
                  Register
                </li>
              </Link>
              <Link to="/login">
                <li className="py-4 text-black hover:text-blue-500">Login</li>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
