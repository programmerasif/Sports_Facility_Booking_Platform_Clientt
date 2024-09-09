import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useAppSelector } from "@/redux/api/hook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAppSelector(state => state?.user);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const locationPath = location.pathname;
  const isHomePage = locationPath == "/";
  
  
  return (
    <nav className={`absolute w-full  z-50 ${!isHomePage ? 'bg-[#12143D] py-4': 'py-6'}`}>
      <div className="mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-green-500">
              <img src={logo} alt="" className="w-44" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-14 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F7A400] font-bold transition duration-300"
                  : "text-gray-50 hover:text-[#F7A400] transition duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F7A400] font-bold transition duration-300"
                  : "text-gray-50 hover:text-[#F7A400] transition duration-300"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F7A400] font-bold transition duration-300"
                  : "text-gray-50 hover:text-[#F7A400] transition duration-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/facality"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F7A400] font-bold transition duration-300"
                  : "text-gray-50 hover:text-[#F7A400] transition duration-300"
              }
            >
              Facality
            </NavLink>
            
           {
            user ? 
            <NavLink
            to="/dashboard"
            className='text-white px-6 py-2 rounded-md bg-[#F7A400] transition duration-300 font-bold'
          >
            Dashboard
          </NavLink>
            :  <div className="flex justify-center items-center gap-4">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-50 px-6 py-1 rounded-md border border-[#F7A400] transition duration-300 font-bold"
                  : "text-gray-50 px-6 py-1 rounded-md border border-[#F7A400] transition duration-300"
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-50 px-6 py-1 rounded-md border border-[#F7A400] transition duration-300 font-bold"
                  : "text-gray-50 px-6 py-1 rounded-md border border-[#F7A400] transition duration-300"
              }
            >
              Login
            </NavLink>
            </div>
           }
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-50 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sliding in from the Left */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#0c0d29] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
          <button
            onClick={toggleMenu}
            className="text-gray-50 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#F7A400] font-bold bg-gray-50 p-2 rounded transition duration-300"
                : "text-gray-50 hover:bg-gray-50 hover:text-[#F7A400] p-2 rounded transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#F7A400] font-bold bg-gray-50 p-2 rounded transition duration-300"
                : "text-gray-50 hover:bg-gray-50 hover:text-[#F7A400] p-2 rounded transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/facality"
            className={({ isActive }) =>
              isActive
                ? "text-[#F7A400] font-bold bg-gray-50 p-2 rounded transition duration-300"
                : "text-gray-50 hover:bg-gray-50 hover:text-[#F7A400] p-2 rounded transition duration-300"
            }
          >
            Facality
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#F7A400] font-bold bg-gray-50 p-2 rounded transition duration-300"
                : "text-gray-50 hover:bg-gray-50 hover:text-[#F7A400] p-2 rounded transition duration-300"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-[#F7A400] font-bold bg-gray-50 p-2 rounded transition duration-300"
                : "text-gray-50 hover:bg-gray-50 hover:text-[#F7A400] p-2 rounded transition duration-300"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
