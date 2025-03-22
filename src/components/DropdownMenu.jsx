import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";

const DropdownMenu = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("https://cardlabs.pythonanywhere.com/api/v1/locations");
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="absolute top-full left-0 w-64 md:w-auto bg-white shadow-lg rounded-md p-4 space-y-4 z-50">
      <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
        <FaLocationArrow className="text-gray-600" />
        <div>
          <p className="font-bold">Nearby</p>
          <p className="text-sm text-gray-500">Find what's near you</p>
        </div>
      </div>

      {locations.map((location, index) => (
        <div
          key={index}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        >
          <img src={location.image} alt={location.name} className="w-10 h-10 rounded-md" />
          <div>
            <p className="font-bold">{location.name}</p>
            <p className="text-sm text-gray-500">{location.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;