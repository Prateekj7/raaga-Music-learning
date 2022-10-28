import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MusicTeacher from "./Pages/AspiringMusician/MusicTeacher/MusicTeacher";
import MusicTeacherContactUs from "./components/MusicTeacherContactUs/MusicTeacherContactUs";
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
        <Route path="/aspiring-musician" element={<MusicTeacher />}></Route>
        <Route path="/music-teacher" element={<MusicTeacherContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
