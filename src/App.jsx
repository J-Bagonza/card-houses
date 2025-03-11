// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/tailwind.css"

function App() {
  return (
    <div className="font-sans">
      {/* Header and Navbar */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="mt-6 px-6">
        <Home />
      </main>
    </div>
  );
}

export default App;