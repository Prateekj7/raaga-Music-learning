import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MusicOption from "./Pages/AspiringMusician/MusicTeacher/Option/MusicOption";
import Home from "./Pages/Home";
import "./aws-exports";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/aspiring-musician" element={<MusicOption />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
