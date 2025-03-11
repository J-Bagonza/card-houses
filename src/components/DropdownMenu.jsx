import { FaLocationArrow } from "react-icons/fa";
import kingsGate from "../assets/images/kings.png"; // Example image

const locations = [
  { name: "Kings", description: "Affordable housing", image: kingsGate },
  { name: "Egerton Apartments", description: "Luxury apartments", image: kingsGate },
  { name: "Right", description: "Near gate", image: kingsGate },
];

const DropdownMenu = () => {
  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md p-4 space-y-4 z-[1000]">
      {/* Nearby Option */}
      <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
        <FaLocationArrow className="text-gray-600" />
        <div>
          <p className="font-bold">Nearby</p>
          <p className="text-sm text-gray-500">Find what's near you</p>
        </div>
      </div>

      {/* Location List */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        >
          <img
            src={location.image}
            alt={location.name}
            className="w-10 h-10 rounded-md"
          />
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