import { useState, useContext } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setIsDropdownOpen(false);
  };

  const handleSignup = () => {
    navigate("/signup");
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
        <button className="text-gray-600 hover:text-black">
          <FaBars size={20} />
        </button>

        {/* User Icon with Hover Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className={`${user ? "text-green-500" : "text-gray-600"} hover:text-black`}>
            <FaUserCircle size={24} />
            {user && <span className="text-xs block text-center">{user.firstName}</span>}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 transition-opacity duration-200 ease-in-out opacity-100">
              {!user ? (
                <>
                  <button onClick={handleLogin} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                    Login
                  </button>
                  <button onClick={handleSignup} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                    Signup
                  </button>
                </>
              ) : (
                <>
                  <button onClick={logout} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;