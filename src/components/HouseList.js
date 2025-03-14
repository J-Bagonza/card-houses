import { useState, useEffect } from "react";

const API_URL = "https://cardlabs.pythonanywhere.com/api/v1/add/room";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setHouses(data); // Assuming API returns an array of rooms
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {houses.map((house) => (
        <div key={house.id} className="shadow-lg rounded-lg overflow-hidden">
          <img
            src={house.image_url} // Ensure this matches the API response
            alt={house.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-3">
            <h3 className="font-bold">{house.name}</h3>
            <p className="text-sm text-gray-600">{house.location}</p>
            <p className="text-lg font-semibold">${house.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;