import { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { signupUser } from "../auth/services/authService";

const Signup = ({ onClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signupUser(userData);
    if (result.success) {
      setSuccess("Account created successfully!");
      setTimeout(onClose, 2000); // Close after success
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <FaTimes size={18} />
        </button>

        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Enter your name" value={userData.name} onChange={handleChange} className="border p-2 w-full rounded-md" required />
          <input type="text" name="phone" placeholder="Enter your phone number" value={userData.phone} onChange={handleChange} className="border p-2 w-full rounded-md" required />
          <input type="email" name="email" placeholder="Enter your email" value={userData.email} onChange={handleChange} className="border p-2 w-full rounded-md" required />
          <input type="password" name="password" placeholder="Enter your password" value={userData.password} onChange={handleChange} className="border p-2 w-full rounded-md" required />
          <input type="password" name="password_confirm" placeholder="Confirm password" value={userData.password_confirm} onChange={handleChange} className="border p-2 w-full rounded-md" required />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;