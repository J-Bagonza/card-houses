import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if a landlord/caretaker is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function (for landlords & caretakers only)
  const login = async (credentials) => {
    try {
      const response = await fetch("https://cardlabs.pythonanywhere.com/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      const role = data.user.role; // "landlord" or "caretaker"

      if (role !== "landlord" && role !== "caretaker") {
        throw new Error("Unauthorized: Only landlords and caretakers can log in.");
      }

      const userData = {
        firstName: data.user.firstName,
        role: role,
        token: data.token, // Store JWT token
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return role; // Return role for redirection
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;