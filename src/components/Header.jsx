import { useState, useContext } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Header = ({ setIsLoginOpen, setIsSignupOpen }) => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Menu Popup

  const handleLogin = () => {
    setIsLoginOpen(true);
    setIsDropdownOpen(false);
  };

  const handleSignup = () => {
    setIsSignupOpen(true);
    setIsDropdownOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-red-500">Card-Houses</div>

      {/* Center - Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <span className="cursor-pointer hover:text-black">Stays</span>
        <span className="cursor-pointer hover:text-black">Experiences</span>
      </nav>

      {/* Right - User Actions */}
      <div className="flex items-center gap-4 relative">
        <span className="hidden sm:block text-gray-500">Find Your Perfect Stay</span>

        {/* Menu Icon (Opens Popup) */}
        <button 
          className="text-gray-600 hover:text-black focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={20} />
        </button>

        {/* User Icon & Dropdown */}
        <div className="relative">
          <button
            className={`${user ? "text-green-500" : "text-gray-600"} hover:text-black focus:outline-none`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaUserCircle size={30} />
            {user && <span className="text-xs block text-center">{user.firstName}</span>}
          </button>

          {/* User Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-4 z-50">
              {/* Close Button */}
              <div className="flex justify-end pr-4">
                <button 
                  onClick={() => setIsDropdownOpen(false)} 
                  className="text-gray-600 hover:text-black focus:outline-none"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {!user ? (
                <>
                  <button
                    onClick={handleLogin}
                    className="block w-full px-6 py-3 text-left text-lg hover:bg-gray-100 focus:outline-none"
                  >
                    Login
                  </button>
                  <hr className="border-t-2 border-red-500 mx-4" />
                  <button
                    onClick={handleSignup}
                    className="block w-full px-6 py-3 text-left text-lg hover:bg-gray-100 focus:outline-none"
                  >
                    Signup
                  </button>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="block w-full px-6 py-3 text-left text-lg hover:bg-gray-100 focus:outline-none"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Menu Popup (About & Contact Us) */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-56 bg-white shadow-lg rounded-md py-4 z-50">
          {/* Close Button */}
          <div className="flex justify-end pr-4">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <button 
            className="block w-full px-6 py-3 text-left text-lg hover:bg-gray-100 focus:outline-none"
          >
            About
          </button>
          <button 
            className="block w-full px-6 py-3 text-left text-lg hover:bg-gray-100 focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;