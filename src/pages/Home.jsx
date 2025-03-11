import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import IconsSection from "../components/IconsSection";
import FiltersModal from "../components/FiltersModal";
import HouseCard from "../components/HouseCard";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const houses = [
    { image: "src/assets/images/house1.jpg", location: "Kings", distance: "500m from campus", price: "Ksh 10,000/month", rating: 4.8 },
    { image: "src/assets/images/house2.jpg", location: "West Haven", distance: "700m from campus", price: "Ksh 8,500/month", rating: 4.6 },
    { image: "src/assets/images/house3.jpg", location: "Campus Heights", distance: "200m from campus", price: "Ksh 12,000/month", rating: 4.9 },
    { image: "src/assets/images/house4.jpg", location: "Student Plaza", distance: "300m from campus", price: "Ksh 9,500/month", rating: 4.7 },
  ];

  return (
    <div className="px-6">
      {/* Icons Section & Filters Button */}
      <div className="flex justify-between items-center">
        <IconsSection />
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-40 flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          <FaFilter className="text-gray-600" />
          <span className="font-medium text-gray-700">Filters</span>
        </button>
      </div>

      {/* Filters Modal */}
      <FiltersModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* House Listings */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {houses.map((house, index) => (
          <HouseCard key={index} {...house} />
        ))}
      </div>
    </div>
  );
};

export default Home;