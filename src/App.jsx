import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "./styles/tailwind.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        {/* Pass setIsLoginOpen & setIsSignupOpen to Header */}
        <Header setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} />
        <Navbar />

        {/* Main Content */}
        <main className="mt-6 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Login & Signup Popups */}
        {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
        {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}
      </Router>
    </AuthProvider>
  );
}

export default App;