// src/components/IconsSection.jsx
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
    <div className="flex gap-6 items-center overflow-x-auto py-4 px-2">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-gray-700 text-sm">
          <div className="text-2xl">{feature.icon}</div>
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default IconsSection;