import { FaSearch, FaUserCircle, FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DatePicker from "./DatePicker";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="relative hidden md:flex items-center justify-center gap-4 bg-white shadow-md py-3 border-t">
        {["Where", "Check-in", "Check-out", "Who"].map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <button
              className="px-4 py-2 text-gray-700 hover:text-black focus:outline-none"
              onClick={() => handleDropdown(item)}
            >
              {item}
              <p className="text-xs text-gray-500">
                {item === "Where" ? "Search destination" : 
                item === "Check-in" || item === "Check-out" ? "Add dates" : 
                "Add guests"}
              </p>
            </button>
            {dropdown === item && (
              <div className="absolute top-full mt-2 bg-white shadow-md rounded-md p-4 w-64">
                {item === "Where" && <DropdownMenu />}
                {item === "Check-in" && <DatePicker />}
                {item === "Check-out" && <DatePicker />}
              </div>
            )}
          </div>
        ))}
        <button className="bg-red-500 text-white rounded-full p-3 ml-2">
          <FaSearch />
        </button>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 px-6 flex justify-around items-center md:hidden">
        <button className="flex flex-col items-center text-gray-600">
          <FaSearch size={22} />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <FaSlidersH size={22} />
          <span className="text-xs">Filters</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <FaUserCircle size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;