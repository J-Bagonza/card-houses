// src/components/HouseCard.jsx
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const HouseCard = ({ image, location, distance, price, rating }) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Image */}
        <img src={image} alt="Houe" className="w-full h-64 object-cover rounded-lg" />
        
        {/* Love Icon */}
        <FaHeart className="absolute top-2 right-2 text-white text-xl" />
      </div>

      {/* Details */}
      <div className="mt-2 text-gray-800">
        <h3 className="font-semibold">{location}</h3>
        <p className="text-sm text-gray-500">{distance}</p>
        <p className="text-md font-medium">{price}</p>
      </div>

      {/* Rating */}
      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center">
        <FaStar className="text-yellow-500" />
        <span className="text-sm font-semibold">{rating}</span>
      </div>
    </div>
  );
};

export default HouseCard;