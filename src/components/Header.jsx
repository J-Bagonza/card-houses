import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-red-500">Card-Houses</div>

      {/* Center - Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <span className="cursor-pointer hover:text-black">Stays</span>
        <span className="cursor-pointer hover:text-black">Experiences</span>
      </nav>

      {/* Right - User Actions */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-gray-500">Find Your Perfect Stay</span>
        <button className="text-gray-600 hover:text-black">
          <FaBars size={20} />
        </button>
        <button className="text-gray-600 hover:text-black">
          <FaUserCircle size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;