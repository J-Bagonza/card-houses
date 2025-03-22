import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DatePicker from "./DatePicker";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type);
  };

  return (
    <nav className="relative bg-white shadow-md py-3 border-t px-4 md:px-6">
      <div className="flex justify-between items-center">
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Search options - Hidden on mobile when menu is closed */}
        <div
          className={`absolute md:static top-full left-0 w-full bg-white shadow-md md:shadow-none md:w-auto md:flex items-center gap-4 p-4 md:p-0 transition-transform ${
            mobileMenu ? "block" : "hidden md:flex"
          }`}
        >
          {["Where", "Check-in", "Check-out", "Who"].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <button
                className="px-4 py-2 text-gray-700 hover:text-black focus:outline-none"
                onClick={() => handleDropdown(item)}
              >
                {item}
                <p className="text-xs text-gray-500">
                  {item === "Where"
                    ? "Search destination"
                    : item === "Check-in" || item === "Check-out"
                    ? "Add dates"
                    : "Add guests"}
                </p>
              </button>
              {dropdown === item && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-4 w-64 z-50">
                  {item === "Where" && <DropdownMenu />}
                  {item === "Check-in" && <DatePicker />}
                  {item === "Check-out" && <DatePicker />}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search button - Always visible */}
        <button className="bg-red-500 text-white rounded-full p-3 ml-2">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;