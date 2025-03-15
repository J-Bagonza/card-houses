import { useState, useContext } from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../auth/services/authService";

const Login = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = await loginUser(credentials);
    if (role) {
      login(role);
      onClose(); // Close the modal after successful login
    } else {
      setError("Invalid username or password");
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
          <FaUserCircle className="text-red-500 text-4xl" />
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={credentials.username}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          />
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;