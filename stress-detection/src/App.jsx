import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StressDetection from "./Pages/StressDetection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/stress" element={<StressDetection />} />
      </Routes>
    </>
  );
}

export default App;
