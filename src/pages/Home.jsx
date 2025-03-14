import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import IconsSection from "../components/IconsSection";
import FiltersModal from "../components/FiltersModal";
import HouseCard from "../components/HouseCard";

const API_URL = "https://cardlabs.pythonanywhere.com/api/v1/rooms";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch houses from API
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch houses");
        
        const data = await response.json();
        setHouses(data); // Assuming API returns an array of house objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

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

      {/* Loading and Error Handling */}
      {loading && <p className="text-center mt-6">Loading houses...</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}

      {/* House Listings */}
      {!loading && !error && (
        <div className="grid grid-cols-4 gap-6 mt-6">
          {houses.map((house) => (
            <HouseCard 
              key={house.id} 
              image={house.image_url} 
              location={house.location} 
              distance={house.distance} 
              price={`Ksh ${house.price}/month`} 
              rating={house.rating} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;