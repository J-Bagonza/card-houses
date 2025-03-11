// src/components/FiltersModal.jsx
import React, { useEffect } from "react";

const FiltersModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="bg-white p-6 w-[90%] max-w-md rounded-lg shadow-lg relative animate-fadeIn">
        {/* Title & Close Button */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Select Filter Section */}
        <h3 className="text-lg font-medium mt-4">Select Your Filter</h3>
        <div className="flex justify-between mt-2 border-b pb-2">
          <button className="text-gray-800 font-semibold hover:text-red-500">
            Pricing
          </button>
          <button className="text-gray-800 font-semibold hover:text-red-500">
            Room Type
          </button>
        </div>

        {/* Pricing Section */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Pricing</p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Ksh 5K - 10K
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Ksh 10K - 15K
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Ksh 15K - 20K
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Ksh 20K+
            </button>
          </div>
        </div>

        {/* Room Type Section */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Room Type</p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Bedsitter
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              1-Bedroom
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              2-Bedroom
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Shared
            </button>
          </div>
        </div>

        {/* Apply & Close Buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;