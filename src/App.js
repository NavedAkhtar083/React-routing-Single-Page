import React from "react";
import "./App.css";
import Navbar from "./component/Footer/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage/homepage";

const App = () => {
  return (
    <Router>
      <div className="page">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<h1>Welcome to About Page</h1>} />
            <Route path="/contact" element={<h1>Welcome to Contact Page</h1>} />
            <Route path="/portfolio" element={<h1>Welcome to Portfolio Page</h1>} />
            <Route path="/email" element={<h1>Welcome to Email Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
