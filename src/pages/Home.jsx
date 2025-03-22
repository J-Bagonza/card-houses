import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import IconsSection from "../components/IconsSection";
import FiltersModal from "../components/FiltersModal";
import HouseCard from "../components/HouseCard";

const HOUSES_API_URL = "https://cardlabs.pythonanywhere.com/api/v1/home/feed";
const DEFAULT_IMAGE_URL = "https://cardlabs.pythonanywhere.com/static/default_house.png"; 

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch houses from API
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(HOUSES_API_URL);
        if (!response.ok) throw new Error("Failed to fetch houses");

        const data = await response.json();
        if (Array.isArray(data.plots)) {
          setHouses(data.plots);
        } else {
          console.error("Unexpected API response:", data);
          setHouses([]);
        }
      } catch (err) {
        setError(err.message);
        setHouses([]);
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
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
    {houses.map((house, index) => {
      const prioritizedImages = [
        "https://cardlabs.pythonanywhere.com/static/2/1.png",
        "https://cardlabs.pythonanywhere.com/static/2/6.png",
        "https://cardlabs.pythonanywhere.com/static/2/7.png",
        "https://cardlabs.pythonanywhere.com/static/2/8.png",
      ];

      let imageUrl = DEFAULT_IMAGE_URL;

      if (index < 4) {
        imageUrl = prioritizedImages[index] || DEFAULT_IMAGE_URL;
      } else {
        const coverPhoto = house.cover_photos.find(photo => photo.type === "cover");
        const roomPhoto = house.cover_photos.find(photo => photo.type === "room");
        imageUrl = coverPhoto?.URL || roomPhoto?.URL || DEFAULT_IMAGE_URL;
      }

      return (
        <HouseCard 
          key={house.id} 
          image={imageUrl} 
          location={house.location} 
          name={house.name} 
          price={`Ksh ${house.general_monthly_rent}/month`} 
          deposit={`Deposit: Ksh ${house.general_deposit}`} 
        />
      );
    })}
  </div>
)}
    </div>
  );
};

export default Home;