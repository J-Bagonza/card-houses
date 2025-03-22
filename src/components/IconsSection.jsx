import React from "react";
import { FaBolt, FaWifi, FaShoppingCart, FaGamepad, FaGlassCheers, FaUniversity, FaTree, FaTint } from "react-icons/fa";

const features = [
  { icon: <FaBolt />, text: "Electricity" },
  { icon: <FaTint />, text: "Water" },
  { icon: <FaWifi />, text: "WiFi" },
  { icon: <FaShoppingCart />, text: "Supermarkets" },
  { icon: <FaGamepad />, text: "Gaming Spots" },
  { icon: <FaGlassCheers />, text: "Clubs & Nightlife" },
  { icon: <FaUniversity />, text: "Near Campus" },
  { icon: <FaTree />, text: "Chilling Spots" }
];

const IconsSection = () => {
  return (
    <div className="flex w-full gap-2 md:gap-8 items-center overflow-x-auto py-2 md:py-4 px-2">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-gray-900 text-xs md:text-sm">
          <div className="text-xl md:text-2xl text-red-500">{feature.icon}</div>
          <span className="text-green-600">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default IconsSection;